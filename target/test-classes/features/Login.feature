
@val
Feature: Login functionality for Omecen

  @smoke
  Scenario: As a user I want to have valid login credential so that I can login successfully
    Given Chrome Browser is open
    And Omecen application is open
    When I enter valid user name
    And I enter valid password
    And I click submit button
    Then I should login successfully
    And I validate login url

 