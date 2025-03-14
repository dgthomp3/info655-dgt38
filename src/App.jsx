import { useEffect, useState } from 'react'
import './App.css'
import Playlist from './Playlist'
import Status from './Status';
import Next from './Next';
import Prev from './Prev';
import Pause from './Pause';
import Play from './Play';
import Shuffle from './Shuffle';

export default function App() {
  const [playlistData, setPlaylistData] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDoubleClick = (item) => {
    setCurrentAudioIndex(playlistData.indexOf(item));
    setIsPlaying(true);
  };

  const handleNextClick = () => {
    const nextIndex = (currentAudioIndex + 1) % playlistData.length;
    setCurrentAudioIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrevClick = () => {
    const prevIndex = currentAudioIndex === 0 ? playlistData.length - 1 : currentAudioIndex - 1;
    setCurrentAudioIndex(prevIndex);
    setIsPlaying(true);
  }

  const handlePlayClick = () => {
    setIsPlaying(true);
  }

  const handlePauseClick = () => {
    setIsPlaying(false);
  };

  const handleShuffleClick = () => {
    if (playlistData.length > 1) {
      const shuffled = [...playlistData].sort(() => Math.random() - 0.5);
      setPlaylistData(shuffled);

      if (currentAudioIndex !== null) {
        const newIndex = shuffled.findIndex(item => 
          item.title === playlistData[currentAudioIndex]?.title ||
          item.episodeTitle === playlistData[currentAudioIndex]?.episodeTitle
        );
        setCurrentAudioIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = [];
      let i = 0;
      
      while(true) {
        try {
          const response = await fetch(`http://localhost:3001/${i}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          fetchedData.push(data); // Add the fetched data to the array
          i++;
        } catch (error) {
          console.error('Error fetching data:', error);
          break;
        }
      }
  
      // Once all data is fetched, update the state
      setPlaylistData(fetchedData);
    };
  
    fetchData();
  }, []);

  const currentAudio = playlistData[currentAudioIndex];
  const title = (currentAudio?.title || currentAudio?.episodeTitle);
  const statusText = isPlaying ? "Playing ~> " : "*Paused* ~> ";

  return (
    <>
      <div>
        <h1>Dallas's Playlist</h1>
        <Status title={title} status={statusText} />

        <div className='controls'>
          <Prev onClick={handlePrevClick} />
          <Pause onClick={handlePauseClick} />
          <Shuffle onClick={handleShuffleClick} />
          <Play onClick={handlePlayClick} />
          <Next onClick={handleNextClick} />
        </div>

        <Playlist onDoubleClick={handleDoubleClick} data={playlistData} />
      </div>
    </>
  )
};