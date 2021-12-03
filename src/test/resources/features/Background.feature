
@val
Feature: Login test in the background

Background:
Given app is open
When user enter userName and Password
Then click on submit button

@Invoice @smoke
Scenario:As a user I want to see New Invoice page
Given user click on invoice page
When user validate the title
Then user validate the url
Then user close the app

 @payments @reg
Scenario:As a user I want to see Payments  page
Given user click on payement page
When user validate payment title
Then user validate payment url
Then user close the app

@Receipts
Scenario:As a user I want to see Receipts  page
Given user click on invoice page
When user validate the title
Then user validate the url
Then user close the app