import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import VideoView from './components/video-view';
import History from './components/history';
import Bookmarks from './components/bookmarks';


function App() {

  const [videoUrl, setvideoUrl] = useState(null); 

  const openVideo = videoUrl => {
    setvideoUrl(videoUrl)
  }

  return (
    <div className="App">
      <div className="App-header">
        <h2>Video Player</h2>
      </div>
      <div className="layout">
        <div>
          <Bookmarks videoUrl={videoUrl} openVideo={openVideo}/> <br/><br/>
          <History openVideo={openVideo} />
        </div>
        <div>
          <SearchBar searchClicked={openVideo} />
          <br/>
          <VideoView videoUrl={videoUrl} />
        </div>
      </div>
    </div>
  );
}

export default App;
