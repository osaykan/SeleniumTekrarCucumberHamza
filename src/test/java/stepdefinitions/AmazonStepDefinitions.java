package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.AmazonPage;

public class AmazonStepDefinitions {

    AmazonPage amazonPage = new AmazonPage();

    @Given("kullanici aramakutusuna {string} yazar")
    public void kullanici_aramakutusuna_yazar(String string) {
        amazonPage.aramaKutusu.sendKeys(string + Keys.ENTER);
    }

    @Then("kullanici sonucsayisini ekrana yazdirir")
    public void kullanici_sonucsayisini_ekrana_yazdirir() {
        System.out.println(amazonPage.sonucSayisi.getText());
    }


}
