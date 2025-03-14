import React from "react";
import { render, screen } from "@testing-library/react";
import Song from "./Song";
import '@testing-library/jest-dom';

describe("Song Component", () => {
    test("renders the song title, artist, and year correctly", () => {
        render(<Song title="Bohemian Rhapsody" artist="Queen" year="1975" />);

        // Check if the title, artist, and year render properly
        const titleElement = screen.getByText(/Bohemian Rhapsody/i);
        const artistElement = screen.getByText(/Queen/i);
        const yearElement = screen.getByText(/\(1975\)/i);

        expect(titleElement).toBeInTheDocument();
        expect(artistElement).toBeInTheDocument();
        expect(yearElement).toBeInTheDocument();
    });

    test("applies the correct CSS class names", () => {
        render(<Song title="Imagine" artist="John Lennon" year="1971" />);

        const songElement = screen.getByText(/Imagine/i);
        const yearElement = screen.getByText(/\(1971\)/i);

        expect(songElement.closest("div")).toHaveClass("songStyle");
        expect(yearElement).toHaveClass("yearStyle");
    });

    test("renders with missing props gracefully", () => {
        render(<Song />);

        // Check that it still renders default values when props are missing
        expect(screen.getByText(/Unknown Title/i)).toBeInTheDocument();
        expect(screen.getByText(/Unknown Artist/i)).toBeInTheDocument();
        expect(screen.getByText(/Unknown Year/i)).toBeInTheDocument();
    });
});
