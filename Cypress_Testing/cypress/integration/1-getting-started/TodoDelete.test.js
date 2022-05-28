/* eslint-disable no-undef */
/* eslint-disable testing-library/await-async-utils */
/// <reference types="cypress" />
describe("Todo delete Function Testing", function () {
  this.beforeEach(function () {
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
  it.only("should be able to delete item", function () {
     cy.intercept("POST","http://localhost:8080/todos",[{
            id:4,
            title:"Learn Memo",
            status:false
        }]).as("todoReq");
       cy.get(".input-todo").type("Learn Memo");
        cy.get(".add-todo").click();
        cy.wait("@todoReq");
        cy.get(".delete-todo").click();
  });
});
