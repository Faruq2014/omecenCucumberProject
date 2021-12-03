package omecenCucumberProject.LoginTests;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import omecenCucumberProject.Base.BaseTest;
import omecenCucumberProject.LoginPages.LoginPage;

public class BoundaryLoginTest extends BaseTest{
	LoginPage lp;
	
	@Given("^\"([^\"]*)\" Browser and application is open$")
	public void browser_and_application_is_open(String browser) throws Throwable {
		OpenApp();
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String userName, String password) throws Throwable {
		 lp = new LoginPage(driver);
			lp.userName(userName);
			 lp.password(password);
		
	}

	@When("^I click login button for the app$")
	public void i_click_login_button_for_the_app() throws Throwable {
		 lp = new LoginPage(driver);
		 lp.siginButton();
	}

	@Then("^I validate login url for the users$")
	public void i_validate_login_url_for_the_users() throws Throwable {
		String actual ="https://inventory.omecen.com/login";
		String expected= driver.getCurrentUrl();
		Assert.assertEquals("did not match",expected, actual);
		tearDown();
	}



}
