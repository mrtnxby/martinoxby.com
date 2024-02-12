describe("Homepage Smoke Test", () => {
  it("should check the buttons and links on the homepage", () => {
    cy.visit("/");

    cy.findByText("hello@martinoxby.com")
      .should("be.visible")
      .and("have.attr", "href", "mailto:hello@martinoxby.com");

    cy.findByText("🌙").should("be.visible");

    cy.findByText("☀️").should("be.visible");

    cy.findByRole("img", { name: "Martin's profile picture" }).should(
      "be.visible",
    );

    cy.findByRole("heading", { name: "Hi, I'm Martin 👋" }).should(
      "be.visible",
    );

    cy.findByText("Zoa")
      .should("be.visible")
      .and("have.attr", "href", "https://zoa.io");

    cy.findByText("Bulb")
      .should("be.visible")
      .and(
        "have.attr",
        "href",
        "https://web.archive.org/web/20230410054502/https://bulb.co.uk/",
      );

    cy.findByRole("link", {
      name: "A Github logo that links to Martin's Github page",
    })
      .should("be.visible")
      .and("have.attr", "href", "https://github.com/mrtnxby");

    cy.findByRole("link", {
      name: "A LinkedIn logo that links to Martin's LinkedIn page",
    })
      .should("be.visible")
      .and("have.attr", "href", "https://www.linkedin.com/in/martin-oxby/");

    cy.findByRole("link", {
      name: "An email icon that allows you to send Martin an email when clicked",
    })
      .should("be.visible")
      .and("have.attr", "href", "mailto:hello@martinoxby.com");

    cy.findByText("© 2024 🧑🏻‍💻").should("be.visible");
  });
});
