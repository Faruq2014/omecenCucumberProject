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
  "duration": 6715109400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userEnterUserNameAndPassword()"
});
formatter.result({
  "duration": 848161100,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.clickOnSubmitButton()"
});
formatter.result({
  "duration": 971594000,
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
  "duration": 10101613500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//*[contains(text(),\u0027Payments\u0027)])[3]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-INQUNRP\u0027, ip: \u0027192.168.0.184\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\Faruq\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:1518}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5a61122830042dd6d487a83b20b91427\n*** Element info: {Using\u003dxpath, value\u003d(//*[contains(text(),\u0027Payments\u0027)])[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat omecenCucumberProject.DashboardPages.PaymentsPage.paymentLink(PaymentsPage.java:19)\r\n\tat omecenCucumberProject.DashboardTests.BackgroundTest.userClickOnPayementPage(BackgroundTest.java:71)\r\n\tat ✽.Given user click on payement page(Background.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BackgroundTest.userValidatePaymentTitle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundTest.userValidatePaymentUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundTest.userCloseTheApp()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 5116328400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userEnterUserNameAndPassword()"
});
formatter.result({
  "duration": 1916442800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.clickOnSubmitButton()"
});
formatter.result({
  "duration": 119860600,
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
  "duration": 8865088500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userValidateTheTitle()"
});
formatter.result({
  "duration": 20201100,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userValidateTheUrl()"
});
formatter.result({
  "duration": 4827000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundTest.userCloseTheApp()"
});
formatter.result({
  "duration": 822183300,
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
  "duration": 4863156000,
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
  "duration": 835263600,
  "status": "passed"
});
formatter.match({
  "location": "BoundaryLoginTest.i_click_login_button_for_the_app()"
});
formatter.result({
  "duration": 81312300,
  "status": "passed"
});
formatter.match({
  "location": "BoundaryLoginTest.i_validate_login_url_for_the_users()"
});
formatter.result({
  "duration": 678854200,
  "error_message": "org.junit.ComparisonFailure: did not match expected:\u003c...ory.omecen.com/login[?username\u003dadmin\u0026password\u003dadmin_test]\u003e but was:\u003c...ory.omecen.com/login[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat omecenCucumberProject.LoginTests.BoundaryLoginTest.i_validate_login_url_for_the_users(BoundaryLoginTest.java:37)\r\n\tat ✽.Then I validate login url for the users(BoundaryLoginTest.feature:11)\r\n",
  "status": "failed"
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
  "duration": 4806951200,
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
  "duration": 1329833900,
  "status": "passed"
});
formatter.match({
  "location": "BoundaryLoginTest.i_click_login_button_for_the_app()"
});
formatter.result({
  "duration": 84318500,
  "status": "passed"
});
formatter.match({
  "location": "BoundaryLoginTest.i_validate_login_url_for_the_users()"
});
formatter.result({
  "duration": 510492600,
  "error_message": "org.junit.ComparisonFailure: did not match expected:\u003c...ory.omecen.com/login[?username\u003dadmin\u0026password\u003dadmin_test]\u003e but was:\u003c...ory.omecen.com/login[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat omecenCucumberProject.LoginTests.BoundaryLoginTest.i_validate_login_url_for_the_users(BoundaryLoginTest.java:37)\r\n\tat ✽.Then I validate login url for the users(BoundaryLoginTest.feature:11)\r\n",
  "status": "failed"
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