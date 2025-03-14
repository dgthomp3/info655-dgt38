import { render, screen, fireEvent } from "@testing-library/react";
import Prev from "./Prev";

describe("Prev Component", () => {
    test("renders the previous button with an image", () => {
        render(<Prev />);

        const buttonElement = screen.getByRole("button");
        const imgElement = screen.getByAltText("Previous");

        expect(buttonElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "src/assets/rewind-23.png");
    });

    test("calls onClick when button is clicked", () => {
        const mockOnClick = jest.fn();
        render(<Prev onClick={mockOnClick} />);

        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("applies correct CSS classes to button and image", () => {
        render(<Prev />);

        const buttonElement = screen.getByRole("button");
        const imgElement = screen.getByAltText("Previous");

        expect(buttonElement).toHaveClass("nextButton");
        expect(imgElement).toHaveClass("nextButtonImg");
    });
});
