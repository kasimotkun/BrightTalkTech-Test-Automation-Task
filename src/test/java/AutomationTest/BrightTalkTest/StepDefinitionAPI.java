package AutomationTest.BrightTalkTest;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static AutomationTest.BrightTalkTest.HomePage.homePage;


import java.util.List;
import java.util.Map;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.testng.Assert;

public class StepDefinitionAPI {

	private String addURI = "";
	private ResponseEntity<String> response;
	private RestTemplate restTemplate = new RestTemplate();
	private String actualErrorMessage;
	private final ObjectMapper mapper = new ObjectMapper();
	private JsonNode jsonNodeRoot = null;


	@Given("^I get the default list of users for on (.*)st page$")
	public void setListOfUsersEndpoint(int pageId) {
		addURI = "https://reqres.in/api/users?page=" + pageId;

	}

	@Given("^I make a search for user (.*)$")
	public void getSingleUserEndpoint(int userId) {
		addURI = "https://reqres.in/api/users/" + userId;
		try {
			response = restTemplate.getForEntity(addURI, String.class);
		} catch (Exception e) {
			actualErrorMessage = e.getMessage();
		}
	}

	@Given("^I create user with following '(.*)' '(.*)'$")
	public void setPostCreateUserEndpoint(String name, String job) {

		addURI = "https://reqres.in/api/users";
		try {
			String jsonBody = "{\"name\":\"" + name + "\",\"job\":\"" + job + "\"}";

			HttpEntity<String> entity = new HttpEntity<String>(jsonBody);

			response = restTemplate.postForEntity(addURI, entity, String.class);
		} catch (Exception e) {
			actualErrorMessage = e.getMessage();
		}
	}

	@Given("^I login successfully with following data$")
	public void setPostSuccessfullLoginEndpoint(DataTable dt) {

		List<Map<String, String>> list = dt.asMaps(String.class, String.class);

		String email = list.get(0).get("Email");
		String password = list.get(0).get("Password");

		addURI = "https://reqres.in/api/login";
		try {
			String jsonBody = "{\"email\":\"" + email + "\", \"password\":\"" + password + "\"}";

			HttpEntity<String> entity = new HttpEntity<String>(jsonBody);

			response = restTemplate.postForEntity(addURI, entity, String.class);
		} catch (Exception e) {
			actualErrorMessage = e.getMessage();
		}
	}

	@Given("^I login unsuccessfully with following data$")
	public void setPostUnsuccessfullLoginEndpoint(DataTable dt) {

		List<Map<String, String>> list = dt.asMaps(String.class, String.class);

		String email = list.get(0).get("Email");

		addURI = "https://reqres.in/api/login";
		try {
			String jsonBody = "{\"email\":\"" + email + "\"}";

			HttpEntity<String> entity = new HttpEntity<String>(jsonBody);

			response = restTemplate.postForEntity(addURI, entity, String.class);
		} catch (Exception e) {
			actualErrorMessage = e.getMessage();
		}
	}

	@Given("^I wait for user list to load for (.*) seconds$")
	public void getDelayedEndpoint(int delaySec) {
		addURI = "https://reqres.in/api/users?delay=" + delaySec;
		try {
			response = restTemplate.getForEntity(addURI, String.class);
		} catch (Exception e) {
			actualErrorMessage = e.getMessage();
		}
	}

	@When("^I get the list of all users$")
	public void getListOfUsersEndpoint() {

		try {
			response = restTemplate.getForEntity(addURI, String.class);
		} catch (Exception e) {
			actualErrorMessage = e.getMessage();
		}
	}

	@Then("^I should see total users per page count equals to number of user ids$")
	public void verifyGetListUsersResponse() {

		jsonNodeRoot = Utils.getJsonRootNode(mapper, response);

		JsonNode jsonNodePerPageCount = jsonNodeRoot.get("per_page");
		JsonNode jsonNodeData = jsonNodeRoot.get("data");
		List<JsonNode> listOfNodes = jsonNodeData.findParents("id");

		int actualCount = jsonNodePerPageCount.asInt();
		int expectedCount = listOfNodes.size();

		Assert.assertEquals(actualCount, expectedCount);

	}

	@Then("^I receive error code '(.*)' in response$")
	public void verifyErrorOfGetSingleUserResponse(String errorMessage) {

		Assert.assertEquals(actualErrorMessage, errorMessage);

	}

	@Then("^I should see following user data$")
	public void verifyGetSingleUserResponse(DataTable dt) {

		List<Map<String, String>> list = dt.asMaps(String.class, String.class);

		String expectedFirstName = list.get(0).get("first_name");
		String expectedEmail = list.get(0).get("email");

		jsonNodeRoot = Utils.getJsonRootNode(mapper, response);

		JsonNode jsonNodeData = jsonNodeRoot.get("data");
		JsonNode jsonFirstName = jsonNodeData.get("first_name");
		JsonNode jsonEmail = jsonNodeData.get("email");

		String actualFirstName = jsonFirstName.asText();
		String actualEmail = jsonEmail.asText();

		Assert.assertEquals(actualFirstName, expectedFirstName);
		Assert.assertEquals(actualEmail, expectedEmail);

	}

	@Then("^response should contain folowing data$")
	public void verifyCreateUserResponse(DataTable dt) {

		jsonNodeRoot = Utils.getJsonRootNode(mapper, response);

		Assert.assertNotNull(jsonNodeRoot.get("id").getTextValue());
		Assert.assertNotNull(jsonNodeRoot.get("createdAt").getTextValue());

	}
	
	@Then("^l should login successfully$")
	public void verifySuccessfullLoginResponse() {

		Assert.assertEquals(response.getStatusCode().value(), 200);

	}
	
	@Then("^I should receive error code '(.*)' in response$")
	public void verifyUnsuccessfullLoginResponse(String errorMessage) {

		Assert.assertEquals(actualErrorMessage, errorMessage);

	}

	@Then("^I should see that every user has a unique id$")
	public void verifyDelayedResponse() {

		jsonNodeRoot = Utils.getJsonRootNode(mapper, response);

		JsonNode jsonNodeData = jsonNodeRoot.get("data");
		List<JsonNode> listOfNodes = jsonNodeData.findParents("id");

		for (int i = 0; i < listOfNodes.size(); i++) {
			for (int j = i + 1; j < listOfNodes.size(); j++) {
				Assert.assertFalse(listOfNodes.get(i).get("id").asInt() == listOfNodes.get(j).get("id").asInt());

			}
		}

	}

}
