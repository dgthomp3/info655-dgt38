import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest"; 
import Play from "./Play";

describe("Play Component", () => {
    test("renders the play button with correct image and alt text", () => {
        render(<Play onClick={() => {}} />);

        // Check if the button and image render with correct properties
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        const imgElement = screen.getByAltText("Play");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "src/assets/play.png");
        expect(imgElement).toHaveClass("nextButtonImg");
    });

    test("triggers onClick when the button is clicked", () => {
        const mockOnClick = vi.fn();
        render(<Play onClick={mockOnClick} />);

        const buttonElement = screen.getByRole("button");
        
        // Simulate a button click
        fireEvent.click(buttonElement);

        // Check if the onClick function was called
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("applies the correct CSS class to the button", () => {
        render(<Play onClick={() => {}} />);
        
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toHaveClass("nextButton");
    });
});
