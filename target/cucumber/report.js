$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Background.feature");
formatter.feature({
  "line": 3,
  "name": "Login test in the background",
  "description": "",
  "id": "login-test-in-the-background",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@val"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "app is open",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter userName and Password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundTest.appIsOpen()"
});
formatter.result({
  "duration": 9945918900,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userEnterUserNameAndPassword()"
});
formatter.result({
  "duration": 537056200,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.clickOnSubmitButton()"
});
formatter.result({
  "duration": 135745100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a user I want to see Payments  page",
  "description": "",
  "id": "login-test-in-the-background;as-a-user-i-want-to-see-payments--page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@payments"
    },
    {
      "line": 17,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user click on payement page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user validate payment title",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user validate payment url",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user close the app",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundTest.userClickOnPayementPage()"
});
formatter.result({
  "duration": 7477960000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userValidatePaymentTitle()"
});
formatter.result({
  "duration": 119067700,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userValidatePaymentUrl()"
});
formatter.result({
  "duration": 15608800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userCloseTheApp()"
});
formatter.result({
  "duration": 1044258300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "app is open",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter userName and Password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundTest.appIsOpen()"
});
formatter.result({
  "duration": 5336218500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userEnterUserNameAndPassword()"
});
formatter.result({
  "duration": 463791500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.clickOnSubmitButton()"
});
formatter.result({
  "duration": 115128500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "As a user I want to see Receipts  page",
  "description": "",
  "id": "login-test-in-the-background;as-a-user-i-want-to-see-receipts--page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Receipts"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user click on invoice page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user validate the title",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user validate the url",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user close the app",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundTest.userClickOnInvoicePage()"
});
formatter.result({
  "duration": 7506273800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userValidateTheTitle()"
});
formatter.result({
  "duration": 17968800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userValidateTheUrl()"
});
formatter.result({
  "duration": 10307400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userCloseTheApp()"
});
formatter.result({
  "duration": 1589886700,
  "status": "passed"
});
formatter.uri("BoundaryLoginTest.feature");
formatter.feature({
  "line": 2,
  "name": "Data driven login test",
  "description": "",
  "id": "data-driven-login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@val"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "As a validator I want to run login data set so that i can do login",
  "description": "boundary test.",
  "id": "data-driven-login-test;as-a-validator-i-want-to-run-login-data-set-so-that-i-can-do-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "\u003cbrowser\u003e Browser and application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \u003cuserName\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click login button for the app",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate login url for the users",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "data-driven-login-test;as-a-validator-i-want-to-run-login-data-set-so-that-i-can-do-login;",
  "rows": [
    {
      "cells": [
        "browser",
        "userName",
        "password"
      ],
      "line": 14,
      "id": "data-driven-login-test;as-a-validator-i-want-to-run-login-data-set-so-that-i-can-do-login;;1"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"admin\"",
        "\"admin_test\""
      ],
      "line": 15,
      "id": "data-driven-login-test;as-a-validator-i-want-to-run-login-data-set-so-that-i-can-do-login;;2"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"admin\"",
        "\"admin_test\""
      ],
      "line": 16,
      "id": "data-driven-login-test;as-a-validator-i-want-to-run-login-data-set-so-that-i-can-do-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "As a validator I want to run login data set so that i can do login",
  "description": "boundary test.",
  "id": "data-driven-login-test;as-a-validator-i-want-to-run-login-data-set-so-that-i-can-do-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@reg"
    },
    {
      "line": 1,
      "name": "@val"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "\"chrome\" Browser and application is open",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"admin\" and \"admin_test\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click login button for the app",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate login url for the users",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 1
    }
  ],
  "location": "BoundaryLoginTest.browser_and_application_is_open(String)"
});
formatter.result({
  "duration": 5206038500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin_test",
      "offset": 21
    }
  ],
  "location": "BoundaryLoginTest.i_enter_and(String,String)"
});
formatter.result({
  "duration": 429687000,
  "status": "passed"
});
formatter.match({
  "location": "BoundaryLoginTest.i_click_login_button_for_the_app()"
});
formatter.result({
  "duration": 109900000,
  "status": "passed"
});
formatter.match({
  "location": "BoundaryLoginTest.i_validate_login_url_for_the_users()"
});
formatter.result({
  "duration": 931595100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a validator I want to run login data set so that i can do login",
  "description": "boundary test.",
  "id": "data-driven-login-test;as-a-validator-i-want-to-run-login-data-set-so-that-i-can-do-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@reg"
    },
    {
      "line": 1,
      "name": "@val"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "\"chrome\" Browser and application is open",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"admin\" and \"admin_test\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click login button for the app",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate login url for the users",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 1
    }
  ],
  "location": "BoundaryLoginTest.browser_and_application_is_open(String)"
});
formatter.result({
  "duration": 6431171800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin_test",
      "offset": 21
    }
  ],
  "location": "BoundaryLoginTest.i_enter_and(String,String)"
});
formatter.result({
  "duration": 422992200,
  "status": "passed"
});
formatter.match({
  "location": "BoundaryLoginTest.i_click_login_button_for_the_app()"
});
formatter.result({
  "duration": 158650400,
  "status": "passed"
});
formatter.match({
  "location": "BoundaryLoginTest.i_validate_login_url_for_the_users()"
});
formatter.result({
  "duration": 834688900,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login functionality for Omecen",
  "description": "",
  "id": "login-functionality-for-omecen",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@val"
    }
  ]
});
});