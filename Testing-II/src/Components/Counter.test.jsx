import { render, screen } from "@testing-library/react";
import App from "../App";
import Counter from "./Counter";

describe("Counter operations",function(){
    it("should render without any errors",function(){
        render(<App></App>)
        expect().toBeInTheDocument();
    })
})