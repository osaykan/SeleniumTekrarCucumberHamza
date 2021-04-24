@examples
Feature: Birden Cok Veri
  Scenario Outline: TC04_google arama testi
    Given kullanici google sayfasina gider
    And kullanici "<kelimeler>" arar
    Then kullanici sayfa basliginda "<kelimeler>" kontrol eder

    Examples: Test Verileri
    |kelimeler       |
    |techproeducation|
    |selenium        |
    |webdriver       |