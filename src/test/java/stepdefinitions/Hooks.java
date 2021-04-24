package stepdefinitions;


import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hooks {

    // TestNG'deki BeforeMethod gibi çalışır.
    // Her senaryodan önce çalışır.
    @Before
    public void setUp(){
        System.out.println("setUp methodu çalıştı.");
    }

    // TestNG'deki AfterMethod gibi çalışır.
    // Her senaryodan sonra çalışır.
    @After
    public void tearDown(Scenario scenario){
        System.out.println("tearDown methodu çalıştı.");

        // Ekran görüntüsü almak için kullanılıyor.
        final byte[] screenshot =  ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        if(scenario.isFailed()){
            scenario.embed(screenshot , "image/png");
        }

        //Driver.closeDriver();
    }

}
