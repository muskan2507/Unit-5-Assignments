/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("testing todo application", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("should show basic structure", function () {
    cy.get(".new-todo").should("exist");
  });
  it("Input box should accept text", function () {
    cy.get(".input-todo").type("Learn React");
    cy.get(".input-todo").should("have.value", "Learn React");
  });
  it("should be able to add todo", function () {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".input-todo").type("Learn React");
    cy.get(".add-todo").click();
    cy.get(".todo-list").children().should("have.length", 3);
  });

  it("should toggle on one item", function () {
    const text = "Learn JS";

    cy.intercept("POST", "http://localhost:8080/todos", [
      {
        id: 4,
        title: text,
        status: false,
      },
    ]).as("todoReq");
    cy.get(".input-todo").type(text);
    cy.get(".add-todo").click();
    cy.get(".toggle-btn").click();
    cy.get(".heading").should("have.css",{color:"green"})
        
    cy.get(".toggle-btn").click();
    cy.get(".heading").should("have.css", { color: "black" });
  });
});
