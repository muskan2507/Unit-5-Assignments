const sum=require("../src/sum_arguments")
const {describe,test,expect}=require("@jest/globals")
describe("Sum Function on Numbers",function(){
    test("Sum Function should work on positive numbers",function(){
        expect(sum(1,2,3)).toBe(6)
    })
    test("Sum Function should work on negative numbers",function(){
        expect(sum(-1,-2,-3)).toBe(-6)
    })
    test("Sum Function should work on both positive & negative numbers",function(){
        expect(sum(-1,2,-3)).toBe(-2)
    })
})
describe("Sum Function on Strings",function(){
   
    test("Sum Function should work on strings",function(){
        expect(sum("1","2","3")).toBe(undefined)
    })
   
})
