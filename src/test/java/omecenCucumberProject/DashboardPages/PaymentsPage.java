package omecenCucumberProject.DashboardPages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class PaymentsPage {
	public WebDriver driver;

	public PaymentsPage(WebDriver driver) {
		super();
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	@FindBy(how=How.XPATH,using="(//*[contains(text(),'Payments')])[3]") private WebElement payment;
	public WebElement paymentLink() {
		payment.click();
		return payment;
	}
	
	public String getTitle() {
		return driver.getTitle();
	}
	
	public String getUrl() {
		return driver.getCurrentUrl();
	}
}
