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
        let que = screen.getByTestId("q");
        let ans = screen.getByTestId("a");
        expect(que).toHaveTextContent("What is HTML?");
        expect(ans).toHaveTextContent("Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.");
        let next = screen.getByTestId("next");
        fireEvent.click(next);
        expect(que).toHaveTextContent("What is CSS?");
        expect(ans).toHaveTextContent("CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications.");
    })
    it("should work on prev button",function(){
        render(<Slider/>)
        let que = screen.getByTestId("q");
        let ans = screen.getByTestId("a");
        let next = screen.getByTestId("next");
        fireEvent.click(next);
        expect(que).toHaveTextContent("What is CSS?");
        expect(ans).toHaveTextContent("CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications.");
        let prev = screen.getByTestId("prev");
        fireEvent.click(prev);
        expect(que).toHaveTextContent("What is HTML?");
        expect(ans).toHaveTextContent("Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.");


    })
})