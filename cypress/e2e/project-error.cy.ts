describe("Project Error", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("Testing images", () => {
      cy.get("img").should("exist").should("be.visible");
    });
    it("Testing button", () => {
      cy.get("button").should("exist").should("be.visible");
    });

    it("The data is reloaded when the “Try again” button is clicked", () => {
      // Click the "Try again" button
      cy.get("button").contains("Try again", { timeout: 10000 }).click();
    });
  });
});
