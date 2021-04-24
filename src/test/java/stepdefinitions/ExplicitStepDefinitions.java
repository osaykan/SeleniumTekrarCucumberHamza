package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.ExplicitPage;
import utilities.Driver;

public class ExplicitStepDefinitions {

    ExplicitPage explicitPage = new ExplicitPage();

    @Given("kullanici {string} sayfaya gider")
    public void kullanici_sayfaya_gider(String string) {
        Driver.getDriver().get(string);
    }

    @Given("kullanici add element butonuna tiklar")
    public void kullanici_add_element_butonuna_tiklar() {
        explicitPage.addElementButonu.click();
    }

    @Then("kullanici delete webelementini gorur")
    public void kullanici_delete_webelementini_gorur() {
        //<button class="added-manually" onclick="deleteElement()">Delete</button>
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 30);
        WebElement yeniElement = wait.until
                (ExpectedConditions.visibilityOfElementLocated(By.className("added-manually")));

        System.out.println(yeniElement.getText());

        String icerisindekiYazi = yeniElement.getText();
        boolean iceriyorMu = icerisindekiYazi.contains("Delete");
        Assert.assertTrue(iceriyorMu);
    }

}
