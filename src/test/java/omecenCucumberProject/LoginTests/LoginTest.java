package omecenCucumberProject.LoginTests;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import omecenCucumberProject.LoginPages.LoginPage;

public class LoginTest {
	public WebDriver driver;
	String Browser="chrome";
	LoginPage lp;
	@Given("^Chrome Browser is open$")
	public void chrome_Browser_is_open() {


		if (Browser.equalsIgnoreCase("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver= new ChromeDriver();

		}

		else if (Browser.equalsIgnoreCase("Firefox")) {
			WebDriverManager.firefoxdriver().setup();
			driver= new FirefoxDriver();

		}
		else if (Browser.equalsIgnoreCase("IE")) {
			WebDriverManager.iedriver().setup();
			driver= new InternetExplorerDriver();

		}else {System.out.println("diver is null");}


		
	
	   System.out.println(" cucumber is running");
	}

	@Given("^Omecen application is open$")
	public void omecen_application_is_open()  {
		driver.get("https://inventory.omecen.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	
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
		 driver.quit();
	}



}
