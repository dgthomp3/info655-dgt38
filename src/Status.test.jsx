import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Status from "./Status";

describe("Status Component", () => {
    test("renders the correct status and title", () => {
        render(<Status title="Views" status="Playing" />);

        // Check if the correct status and title are displayed separately
        const statusElement = screen.getByText(/Playing/i);
        const titleElement = screen.getByText(/Views/i);

        expect(statusElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
    });

    test("renders nothing if no status or title are provided", () => {
        render(<Status />);

        // Check if no content is rendered
        const statusElement = screen.queryByText(/Playing ~> Views/i);
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

        const statusElement = screen.getByText(/Playing/i);
        expect(statusElement).toHaveClass("status");
    });
});
