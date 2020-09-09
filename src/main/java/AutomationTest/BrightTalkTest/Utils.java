package AutomationTest.BrightTalkTest;

import java.io.IOException;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.ResponseEntity;

final class Utils {
    public Utils() {
       
    }
    
    public static JsonNode getJsonRootNode(ObjectMapper mapper, ResponseEntity<String> response)
    {
    	JsonNode jsonNodeRoot=null;
    	try {
			jsonNodeRoot = mapper.readTree(response.getBody());
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	return jsonNodeRoot;
    }
}
