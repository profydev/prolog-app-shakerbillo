describe("Footer Tests", () => {
  beforeEach(() => {
    // Assuming your React app is served locally
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900); // Setting viewport for desktop resolution
    });

    it("checks for the presence of the footer", () => {
      cy.get("footer").should("exist"); // Check if the footer exists
    });

    it("checks the footer links", () => {
      cy.get("footer").find("a").should("have.length", 4); // Asserts the number of links in the footer
    });

    it("checks the content of each paragraph", () => {
      // Ensure each paragraph is not empty
      cy.get("footer")
        .find("p")
        .each(($el) => {
          expect($el).to.not.be.empty;
        });
    });

    it("ensures the image has a non-empty src attribute", () => {
      // Asserts that the image in the footer has a non-empty 'src' attribute
      cy.get("footer")
        .find("img")
        .should("have.attr", "src")
        .and("not.be.empty");
    });
  });
});
