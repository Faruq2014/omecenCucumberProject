@val
Feature: Data driven login test

  @reg
  Scenario Outline: As a validator I want to run login data set so that i can do login
    boundary test.

    Given <browser> Browser and application is open
    When I enter <userName> and <password>
    And I click login button for the app
    Then I validate login url for the users

    Examples: 
      | browser  | userName | password     |
      | "chrome" | "admin"  | "admin_test" |
      | "chrome" | "admin"  | "admin_test" |
      