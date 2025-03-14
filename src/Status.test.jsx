import { render, screen } from "@testing-library/react";
import Status from "./Status";

describe("Status Component", () => {
    test("renders the correct status and title", () => {
        render(<Status title="Views" status="Playing" />);

        // Check if the correct status and title are displayed
        const statusElement = screen.getByText(/Views Playing/i);
        expect(statusElement).toBeInTheDocument();
    });

    test("renders nothing if no status or title are provided", () => {
        render(<Status />);

        // Check if no content is rendered
        const statusElement = screen.queryByText(/Views Playing/i);
        expect(statusElement).toBeNull();
    });

    test("renders the title even when status is missing", () => {
        render(<Status title="Views" />);

        // Check if only the title renders
        const statusElement = screen.getByText(/Views/i);
        expect(statusElement).toBeInTheDocument();
    });

    test("renders the status even when title is missing", () => {
        render(<Status status="Playing" />);

        // Check if only the status renders
        const statusElement = screen.getByText(/Playing/i);
        expect(statusElement).toBeInTheDocument();
    });

    test("applies the correct CSS class", () => {
        render(<Status title="Views" status="Playing" />);

        const statusElement = screen.getByText(/Views Playing/i);
        expect(statusElement).toHaveClass("status");
    });
});
