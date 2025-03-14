import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Next from "./Next";

describe("Next Component", () => {
    test("renders the Next button with correct image and alt text", () => {
        render(<Next onClick={() => {}} />);

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        const imgElement = screen.getByAltText("Next");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "src/assets/fast-forward-button.svg");
        expect(imgElement).toHaveClass("nextButtonImg");
    });

    test("triggers onClick when button is clicked", () => {
        const mockOnClick = vi.fn();

        render(<Next onClick={mockOnClick} />);

        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("applies the correct CSS class to the button", () => {
        render(<Next onClick={() => {}} />);

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toHaveClass("nextButton");
    });
});
