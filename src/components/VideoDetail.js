import React from 'react';
import {Paper, Typography} from '@mui/material';

function VideoDetail({selectedVideo}) {
  console.log(selectedVideo);
  if(!selectedVideo) return <h1>Loading...</h1>
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{height: '30%'}}>
        <iframe height='100%' title='Video Player' src={videoSrc} />
      </Paper>
      <Paper elevation={6} style={{padding: '15px'}}>
        <Typography variant='h4'>{selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle}</Typography>
        <Typography variant='subtitle1'>{selectedVideo.snippet.channelTitle}</Typography>
        <Typography variant='subtitle2'>{selectedVideo.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}
export default VideoDetail;
