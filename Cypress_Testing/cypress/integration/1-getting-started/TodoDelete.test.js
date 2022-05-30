/* eslint-disable no-undef */
/* eslint-disable testing-library/await-async-utils */
/// <reference types="cypress" />
describe("Todo delete Function Testing", function () {
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
  it("should be able to delete item", function () {
   
    const text = "Learn Memo";

    cy.intercept("POST","http://localhost:8080/todos",[{
        id:4,
        title:text,
        status:false
    }]).as("todoReq");

    cy.get(".input-todo").type(text);
    cy.get(".add-todo").click();

    cy.wait("@todoReq");

    cy.get(".delete-todo").click();
    cy.get(".todo-list .items").should("have.length",3)
  });
});
