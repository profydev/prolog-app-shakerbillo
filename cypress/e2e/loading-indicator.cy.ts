describe("Project List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("Testing the loading spinner", () => {
      cy.get("img").should("exist").should("be.visible"); // Check if the footer exists
    });
  });
});
