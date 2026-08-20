/// <reference types="cypress" />

describe("Describe the test scenario", () => {
    let testData: any;
  
    beforeEach(() => {
      cy.fixture("input.data").then((fixtureData) => {
        testData = fixtureData;
      });
      cy.visit("/");
    });
  
    it("describe the test caser", function () {
  
    });
  });
  