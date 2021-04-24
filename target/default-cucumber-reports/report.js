$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazonarama.feature");
formatter.feature({
  "name": "Amazon Urun Arama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC06_kullanici amazonda urun aramasi yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazonurunarama"
    }
  ]
});
formatter.step({
  "name": "kullanici \"https://amazon.com\" sayfaya gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici aramakutusuna \"\u003ckelime\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici sonucsayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kelime"
      ]
    },
    {
      "cells": [
        "headphones"
      ]
    },
    {
      "cells": [
        "tv"
      ]
    },
    {
      "cells": [
        "sponge"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC06_kullanici amazonda urun aramasi yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazonurunarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://amazon.com\" sayfaya gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ExplicitStepDefinitions.kullanici_sayfaya_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"headphones\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonucsayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonucsayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_kullanici amazonda urun aramasi yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazonurunarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://amazon.com\" sayfaya gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ExplicitStepDefinitions.kullanici_sayfaya_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"tv\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonucsayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonucsayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_kullanici amazonda urun aramasi yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazonurunarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://amazon.com\" sayfaya gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ExplicitStepDefinitions.kullanici_sayfaya_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"sponge\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonucsayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonucsayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});