import { render, screen, fireEvent } from "@testing-library/react";
import Playlist from "./Playlist";
import Song from "./Song";
import Podcast from "./Podcast";

jest.mock("./Song");
jest.mock("./Podcast");

describe("Playlist Component", () => {
    test("renders a list of songs and podcasts based on data", () => {
        // Mock data
        const data = [
            { artist: "Artist 1", title: "Song 1", year: 2022 },
            { episodeTitle: "Podcast 1", episode: 1, season: 1 },
        ];

        // Mock the components
        Song.mockImplementation(({ title, artist }) => (
            <div>{`${artist} - ${title}`}</div>
        ));
        Podcast.mockImplementation(({ episodeTitle }) => (
            <div>{episodeTitle}</div>
        ));

        render(<Playlist data={data} onDoubleClick={() => {}} />);

        // Check if Song and Podcast render
        expect(screen.getByText("Artist 1 - Song 1")).toBeInTheDocument();
        expect(screen.getByText("Podcast 1")).toBeInTheDocument();
    });

    test("calls onDoubleClick with the correct item when a song or podcast is double-clicked", () => {
        const mockOnDoubleClick = jest.fn();
        const data = [
            { artist: "Artist 1", title: "Song 1", year: 2022 },
            { episodeTitle: "Podcast 1", episode: 1, season: 1 },
        ];

        render(<Playlist data={data} onDoubleClick={mockOnDoubleClick} />);

        const songElement = screen.getByText("Artist 1 - Song 1");
        const podcastElement = screen.getByText("Podcast 1");

        // Simulate double-click on Song and Podcast
        fireEvent.doubleClick(songElement);
        fireEvent.doubleClick(podcastElement);

        // Assert that onDoubleClick was called with the correct item
        expect(mockOnDoubleClick).toHaveBeenCalledWith({ artist: "Artist 1", title: "Song 1", year: 2022 });
        expect(mockOnDoubleClick).toHaveBeenCalledWith({ episodeTitle: "Podcast 1", episode: 1, season: 1 });
    });

    test("renders the correct number of items based on data", () => {
        const data = [
            { artist: "Artist 1", title: "Song 1", year: 2022 },
            { artist: "Artist 2", title: "Song 2", year: 2023 },
            { episodeTitle: "Podcast 1", episode: 1, season: 1 },
        ];

        render(<Playlist data={data} onDoubleClick={() => {}} />);

        // Check if the correct number of items are rendered
        expect(screen.getAllByText(/Song/)).toHaveLength(2);
        expect(screen.getByText("Podcast 1")).toBeInTheDocument();
    });

    test("renders nothing if data is empty", () => {
        render(<Playlist data={[]} onDoubleClick={() => {}} />);

        // Assert that no content is rendered
        expect(screen.queryByText("Song 1")).toBeNull();
        expect(screen.queryByText("Podcast 1")).toBeNull();
    });
});
