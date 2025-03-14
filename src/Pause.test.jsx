import { render, screen, fireEvent } from "@testing-library/react";
import Pause from "./Pause";

describe("Pause Component", () => {
    test("renders the pause button with correct image and alt text", () => {
        render(<Pause onClick={() => {}} />);

        // Check if the button and image render with correct properties
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        const imgElement = screen.getByAltText("Pause");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "src/assets/pause.svg");
        expect(imgElement).toHaveClass("nextButtonImg");
    });

    test("triggers onClick when the button is clicked", () => {
        const mockOnClick = jest.fn();
        render(<Pause onClick={mockOnClick} />);

        const buttonElement = screen.getByRole("button");

        // Simulate a button click
        fireEvent.click(buttonElement);

        // Check if the onClick function was called
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("applies the correct CSS class to the button", () => {
        render(<Pause onClick={() => {}} />);

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toHaveClass("nextButton");
    });
});
