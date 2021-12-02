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

public class BoundaryLoginTest {
	public WebDriver driver; 
	String Browser="chrome";
	LoginPage lp;
	
	@Given("^\"([^\"]*)\" Browser and application is open$")
	public void browser_and_application_is_open(String browser) throws Throwable {


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

		driver.get("https://inventory.omecen.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		
	
	   System.out.println(" cucumber is running");
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
	 driver.quit();
	}



}
