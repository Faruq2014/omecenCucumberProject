package omecenCucumberProject.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/features",
				tags={"@smoke"},
		glue= {"omecenCucumberProject.LoginTests"},		
		dryRun=false
		)
public class BddRunner {

}
