import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Podcast from "./Podcast";

describe("Podcast Component", () => {
    test("renders the episode title correctly", () => {
        render(<Podcast episodeTitle="The Future of Tech" episode={1} season={1} />);

        const episodeTitleElement = screen.getByText(/The Future of Tech/i);
        expect(episodeTitleElement).toBeInTheDocument();
    });

    test("renders the season and episode number when season is defined", () => {
        render(<Podcast episodeTitle="Tech Talk" episode={5} season={2} />);

        const seasonEpisodeElement = screen.getByText(/S2E5/i);
        expect(seasonEpisodeElement).toBeInTheDocument();
    });

    test("renders 'Episode' when season is undefined", () => {
        render(<Podcast episodeTitle="Learning React" episode={10} />);

        const episodeElement = screen.getByText(/Episode 10/i);
        expect(episodeElement).toBeInTheDocument();
    });

    test("applies the correct CSS class to the div", () => {
        render(<Podcast episodeTitle="React for Beginners" episode={3} season={1} />);

        const divElement = screen.getByText(/React for Beginners/i).parentElement; // Get the parent div of the title
        expect(divElement).toHaveClass("podStyle");

        const episodeElement = screen.getByText(/S1E3/i);
        expect(episodeElement).toHaveClass("epiStyle");
    });
});
