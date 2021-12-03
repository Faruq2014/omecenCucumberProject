package omecenCucumberProject.DashboardTests;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import omecenCucumberProject.Base.BaseTest;
import omecenCucumberProject.DashboardPages.InvoicePage;
import omecenCucumberProject.DashboardPages.PaymentsPage;
import omecenCucumberProject.LoginPages.LoginPage;

public class BackgroundTest extends BaseTest{
	LoginPage lp;
	InvoicePage dp;
	PaymentsPage pp;
	/**
	 * back ground starts here
	 */
	@Given("^app is open$")
	public void appIsOpen()  {
		OpenApp();
	}

	@When("^user enter userName and Password$")
	public void userEnterUserNameAndPassword() throws Throwable {
		 lp = new LoginPage(driver);
			lp.userName("admin");
			 lp.password("admin_test");
	}

	@Then("^click on submit button$")
	public void clickOnSubmitButton() throws Throwable {
		 lp = new LoginPage(driver);
		 lp.siginButton();
	}

	/**
	 * @throws Throwable
	 * invoice scenario starts
	 */
	@Given("^user click on invoice page$")
	public void userClickOnInvoicePage() throws Throwable {
	  dp=new InvoicePage(driver);
	  dp.invoiceLink();
	}
	
	@When("^user validate the title$")
	public void userValidateTheTitle() throws Throwable {
		dp=new InvoicePage(driver);
		System.out.println(dp.getTitle());
		
	}

	@Then("^user validate the url$")
	public void userValidateTheUrl() throws Throwable {
		dp=new InvoicePage(driver);
		System.out.println(dp.getUrl());
	}
	
	@Then("^user close the app$")
	public void userCloseTheApp() throws Throwable {
		tearDown();
	}
	
	/**
	 * @throws Throwable
	 * this is payments scenarios
	 */
	@Given("^user click on payement page$")
	public void userClickOnPayementPage() throws Throwable {
	   pp= new PaymentsPage(driver);
	   pp.paymentLink();
	}
	
	@When("^user validate payment title$")
	public void userValidatePaymentTitle() throws Throwable {
		 pp= new PaymentsPage(driver);
		   pp.getTitle();
	}

	@Then("^user validate payment url$")
	public void userValidatePaymentUrl() throws Throwable {
		 pp= new PaymentsPage(driver);
		   pp.getUrl();
	}


}
