@fhctrip
Feature: FhcTrip Kayit
  Scenario Outline: fhctrip websitesine kayit
    Given kullanici fhctrip kayit sayfasina gider
    And kullanici username "<username>" girer
    And kullanici email "<email>" girer
    And kullanici fullname "<fullname>" girer

    Examples: Test Verileri
    |username   |email              |fullname        |
    |hamzay     |h@gmail.com        |hamza yilmaz    |
    |iskender   |iskender@gmai.com  |iskender d      |
    |hakki      |hakki@gmail.com    |hakki bey       |
    |yesim      |yesim@gmail.com    |yesim karagulmez|
