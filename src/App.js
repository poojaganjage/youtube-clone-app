import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import youtube from './api/youtube';
// import SearchBar from './components/SearchBar';
// import VideoDetail from './components/VideoDetail';
// import VideoList from './components/VideoList';
import {SearchBar, VideoDetail, VideoList} from './components/index';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const handleSubmit = async(searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyClLZulW4nfBdDVOlUpxB2_6MsYHbPn8L0',
        q: searchTerm
      }
    });
    console.log(response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  const onSelectVideo = (video) => {
    setSelectedVideo(video);
  }
  return (
    <Grid justify='center' container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail selectedVideo={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onSelectVideo={onSelectVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default App;
