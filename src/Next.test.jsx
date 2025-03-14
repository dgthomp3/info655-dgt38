import { render, screen, fireEvent } from "@testing-library/react";
import Next from "./Next";

describe("Next Component", () => {
    test("renders the Next button with correct image and alt text", () => {
        render(<Next onClick={() => {}} />);

        // Ensure the button renders properly
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        // Check if the image renders with correct src and alt attributes
        const imgElement = screen.getByAltText("Next");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "src/assets/fast-forward-button.svg");
        expect(imgElement).toHaveClass("nextButtonImg");
    });

    test("triggers onClick when button is clicked", () => {
        const mockOnClick = jest.fn();
        render(<Next onClick={mockOnClick} />);

        const buttonElement = screen.getByRole("button");

        // Simulate a button click
        fireEvent.click(buttonElement);

        // Ensure the onClick handler was called once
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("applies the correct CSS class to the button", () => {
        render(<Next onClick={() => {}} />);

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toHaveClass("nextButton");
    });
});