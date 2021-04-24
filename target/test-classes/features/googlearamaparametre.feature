Feature: Parametreli Arama
  @webdriverArama
  Scenario: TC03_kullanici googleda arama yapar
    Given kullanici google  sayfasina gider
    And kullanici "webdriver" kelimesi arar
    Then kullanici sayfa basliginda "webdriver" kelimesini kontrol eder

# not almak için # ifadesini kullanabilirsiniz.