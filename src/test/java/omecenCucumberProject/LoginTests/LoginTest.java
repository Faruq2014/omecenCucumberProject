package omecenCucumberProject.LoginTests;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import omecenCucumberProject.Base.BaseTest;
import omecenCucumberProject.LoginPages.LoginPage;

public class LoginTest extends BaseTest{
	
	LoginPage lp;
	@Given("^Chrome Browser is open$")
	public void chrome_Browser_is_open() {
		
		OpenApp();
	}

	@Given("^Omecen application is open$")
	public void omecen_application_is_open()  {
		System.out.println("hello");
	}

	@When("^I enter valid user name$")
	public void i_enter_valid_user_name()  {
		 lp = new LoginPage(driver);
		lp.userName("admin");
	}

	@When("^I enter valid password$")
	public void i_enter_valid_password() {
		 lp = new LoginPage(driver);
		 lp.password("admin_test");
	}

	@When("^I click submit button$")
	public void i_click_submit_button()  {
		 lp = new LoginPage(driver);
		 lp.siginButton();
		 System.out.println(driver.getCurrentUrl());
	}

	@Then("^I should login successfully$")
	public void i_should_login_successfully()  {
		String actual ="https://inventory.omecen.com/login";
		String expected= driver.getCurrentUrl();
		Assert.assertEquals("did not match",expected, actual);
	
	}

	@Then("^I validate login url$")
	public void i_validate_login_url() {
		 System.out.println(" Iam loged In .....");
		 //tearDown();
	}



}
