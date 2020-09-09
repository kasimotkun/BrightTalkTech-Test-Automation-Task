$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/API-Test.feature");
formatter.feature({
  "line": 1,
  "name": "API test",
  "description": "",
  "id": "apı-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6041014100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "apı-test;should-see-lıst-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I get the list of all users",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see total users per page count equals to number of user ids",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "StepDefinitionAPI.setListOfUsersEndpoint(int)"
});
formatter.result({
  "duration": 653139200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAPI.getListOfUsersEndpoint()"
});
formatter.result({
  "duration": 225121800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAPI.verifyGetListUsersResponse()"
});
formatter.result({
  "duration": 28870000,
  "status": "passed"
});
formatter.after({
  "duration": 626275600,
  "status": "passed"
});
formatter.before({
  "duration": 5520543100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "apı-test;should-see-sıngle-user-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ],
      "line": 11
    },
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "StepDefinitionAPI.getSingleUserEndpoint(int)"
});
formatter.result({
  "duration": 68670900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAPI.verifyGetSingleUserResponse(DataTable)"
});
formatter.result({
  "duration": 2316200,
  "status": "passed"
});
formatter.after({
  "duration": 627481100,
  "status": "passed"
});
formatter.before({
  "duration": 5399812600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "apı-test;should-see-sıngle-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I make a search for user 55",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I receive error code \u0027404 Not Found\u0027 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 25
    }
  ],
  "location": "StepDefinitionAPI.getSingleUserEndpoint(int)"
});
formatter.result({
  "duration": 116267900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404 Not Found",
      "offset": 22
    }
  ],
  "location": "StepDefinitionAPI.verifyErrorOfGetSingleUserResponse(String)"
});
formatter.result({
  "duration": 76300,
  "status": "passed"
});
formatter.after({
  "duration": 618923000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "CREATE a user",
  "description": "",
  "id": "apı-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following \u0027\u003cName\u003e\u0027 \u0027\u003cJob\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "apı-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 24,
      "id": "apı-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 25,
      "id": "apı-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 26,
      "id": "apı-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5350226900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "CREATE a user",
  "description": "",
  "id": "apı-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following \u0027Peter\u0027 \u0027Manager\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 30
    },
    {
      "val": "Manager",
      "offset": 38
    }
  ],
  "location": "StepDefinitionAPI.setPostCreateUserEndpoint(String,String)"
});
formatter.result({
  "duration": 202959900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAPI.verifyCreateUserResponse(DataTable)"
});
formatter.result({
  "duration": 169100,
  "status": "passed"
});
formatter.after({
  "duration": 990290800,
  "status": "passed"
});
formatter.before({
  "duration": 5250675900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CREATE a user",
  "description": "",
  "id": "apı-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following \u0027Liza\u0027 \u0027Sales\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 30
    },
    {
      "val": "Sales",
      "offset": 37
    }
  ],
  "location": "StepDefinitionAPI.setPostCreateUserEndpoint(String,String)"
});
formatter.result({
  "duration": 159126500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAPI.verifyCreateUserResponse(DataTable)"
});
formatter.result({
  "duration": 230800,
  "status": "passed"
});
formatter.after({
  "duration": 724439900,
  "status": "passed"
});
formatter.before({
  "duration": 5402087800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "apı-test;logın---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I login successfully with following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 30
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 31
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "l should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAPI.setPostSuccessfullLoginEndpoint(DataTable)"
});
formatter.result({
  "duration": 111129100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAPI.verifySuccessfullLoginResponse()"
});
formatter.result({
  "duration": 759300,
  "error_message": "java.lang.NullPointerException\r\n\tat AutomationTest.BrightTalkTest.StepDefinitionAPI.verifySuccessfullLoginResponse(StepDefinitionAPI.java:179)\r\n\tat ✽.Then l should login successfully(src/test/java/API-Test.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 724197100,
  "status": "passed"
});
formatter.before({
  "duration": 5267819200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "apı-test;logın---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I login unsuccessfully with following data",
  "rows": [
    {
      "cells": [
        "Email"
      ],
      "line": 36
    },
    {
      "cells": [
        "peter@klaven"
      ],
      "line": 37
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I should receive error code \u0027400 Bad Request\u0027 in response",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAPI.setPostUnsuccessfullLoginEndpoint(DataTable)"
});
formatter.result({
  "duration": 115506700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 Bad Request",
      "offset": 29
    }
  ],
  "location": "StepDefinitionAPI.verifyUnsuccessfullLoginResponse(String)"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
formatter.after({
  "duration": 699781300,
  "status": "passed"
});
formatter.before({
  "duration": 5392466200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Should see list of users with DELAYED RESPONSE",
  "description": "",
  "id": "apı-test;should-see-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I wait for user list to load for 3 seconds",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 33
    }
  ],
  "location": "StepDefinitionAPI.getDelayedEndpoint(int)"
});
formatter.result({
  "duration": 3095393800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAPI.verifyDelayedResponse()"
});
formatter.result({
  "duration": 355500,
  "status": "passed"
});
formatter.after({
  "duration": 640071300,
  "status": "passed"
});
formatter.uri("src/test/java/SampleTest.feature");
formatter.feature({
  "line": 1,
  "name": "BrightTalk  Sample Test",
  "description": "",
  "id": "brighttalk--sample-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5376105400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Sample",
  "description": "",
  "id": "brighttalk--sample-test;sample",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionUI.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 1027250000,
  "status": "passed"
});
formatter.after({
  "duration": 650151100,
  "status": "passed"
});
});