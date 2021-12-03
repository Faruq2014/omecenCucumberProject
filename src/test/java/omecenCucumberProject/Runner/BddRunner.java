package omecenCucumberProject.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"pretty","html:target/cucumber","json:target/cucumber-report.json"},
		snippets=SnippetType.CAMELCASE,
		features="src/test/resources/features",
				//tags={"@smoke"},
						tags="~@smoke", //~ this sign will escape that scenario
						//tags="@smoke, @reg", //this is or condition. 
						//if scenario has one of the tag it will run the scenario.
	
						  //tags = {" @smoke","@reg"}, 
						////this is and condition. if scenario has both of the tag,
						//it will run the scenario.
						// name= {"Invoice"}, // name will run from matching word from scenario line.
						               //it also take regular expression. 
				
				
		glue= {"omecenCucumberProject"},		
		dryRun=false
		)
public class BddRunner {

}
