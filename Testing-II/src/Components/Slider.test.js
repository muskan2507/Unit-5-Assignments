import { fireEvent, render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Checking Slider component",function(){
    it("should render",function(){
        render(<Slider/>)
        let que = screen.getByTestId("q");
        let ans = screen.getByTestId("a");
        expect(que).toBeInTheDocument();
        expect(ans).toBeInTheDocument();
    });

    
    it("should work on next button",function(){
        render(<Slider/>)
        let child=screen.getByTestId("child")
        expect(child).toHaveValue(1)
        // let next = screen.getByText("Next");
        // fireEvent.click(next);
        
    })
})