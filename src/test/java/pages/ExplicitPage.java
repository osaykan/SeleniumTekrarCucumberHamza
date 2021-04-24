package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ExplicitPage {
    public ExplicitPage(){
        PageFactory.initElements(Driver.getDriver() , this);
    }

    //<button onclick="addElement()">Add Element</button>
    //*[.='Add Element']
    @FindBy ( xpath = "//button[@onclick='addElement()']")
    public WebElement addElementButonu;

}
