import { render, screen, fireEvent } from "@testing-library/react";
import Shuffle from "./Shuffle";

describe("Shuffle Component", () => {
    test("renders the shuffle button with an image", () => {
        render(<Shuffle />);

        // Check if the button and image render properly
        const buttonElement = screen.getByRole("button");
        const imgElement = screen.getByAltText("Shuffle");

        expect(buttonElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "src/assets/shuffle.svg");
    });

    test("calls onClick when button is clicked", () => {
        const mockOnClick = jest.fn();
        render(<Shuffle onClick={mockOnClick} />);

        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("applies correct CSS classes to button and image", () => {
        render(<Shuffle />);

        const buttonElement = screen.getByRole("button");
        const imgElement = screen.getByAltText("Shuffle");

        expect(buttonElement).toHaveClass("nextButton");
        expect(imgElement).toHaveClass("nextButtonImg");
    });
});