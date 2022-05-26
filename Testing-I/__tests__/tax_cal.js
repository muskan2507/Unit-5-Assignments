const {test,describe,expect} = require("@jest/globals");
const taxCal = require("../src/tax_cal");

describe("Checking tax for different amounts",function(){
    test("less than 2,50,000",function(){
        expect(taxCal(1000)).toBe("no tax")
    });

    test("less than 2,50,000",function(){
        expect(taxCal(249999)).toBe("no tax")
    });

    test("less than 5,00,000",function(){
        expect(taxCal(450000)).toBe(22500)
    });

    test("less than 5,00,000",function(){
        expect(taxCal(425653)).toBe(21282)
    });

    test("less than 10,00,000",function(){
        expect(taxCal(700000)).toBe(98000)
    });

    test("less than 10,00,000",function(){
        expect(taxCal(824698)).toBe(115457)
    });

    test("greater than 10,00,000",function(){
        expect(taxCal(1100000)).toBe(297000)
    });

    test("greater than 100,00,000",function(){
        expect(taxCal(10000000)).toBe(2700000)
    });
})