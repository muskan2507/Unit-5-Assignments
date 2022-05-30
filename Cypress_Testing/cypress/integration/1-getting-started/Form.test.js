/* eslint-disable no-undef */
/// <reference types="cypress" />

const data = [
    {
        id:1,
        name:"Raju",
        age:12
    },
    {
        id:2,
        name:"Bhim",
        age:13
    }
]

describe("form basic testing",function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    })
    it("should render without crash",function(){       
        cy.get(".form").should("exist")
    });

    it("should get data on first render",function(){
        cy.intercept("GET","http://localhost:8080/form",data);
    })

    it("should type add something to list",function(){
        const text = {name:"Peeka Boo",age:12}
        cy.intercept("POST","http://localhost:8080/form",text)
        cy.get(".input-name").type("Peeka Boo");
        cy.get(".input-age").type("5");
        cy.get(".submit-btn").click();
        cy.get(".items").should("have.length",4)
    })

    it("should get error",function(){
        cy.intercept("POST","http://localhost:8080/form", {
            statusCode: 500,
            body: {
              name: 'Molu',
              age: 14
            },
          }).as("formReq");
          cy.get(".input-name").type("Molu");
        cy.get(".input-age").type("30");
        cy.get(".submit-btn").click();

        cy.get(".error").should("be.visible")
    })
})