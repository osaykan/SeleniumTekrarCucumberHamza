@explicit
Feature: Explicit Wait Ornek
  Scenario: TC05_kullanici add element butonuna tiklayarak yeni bir webelement olusturur
    Given kullanici "https://the-internet.herokuapp.com/add_remove_elements/" sayfaya gider
    And kullanici add element butonuna tiklar
    Then kullanici delete webelementini gorur