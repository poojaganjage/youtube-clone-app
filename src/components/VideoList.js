import React from 'react';
import {Grid} from '@mui/material';
import VideoItem from './VideoItem';

function VideoList({videos, onSelectVideo}) {
  const listOfVideos = videos.map((video, id) => {
    return <VideoItem key={id} video={video} onSelectVideo={onSelectVideo} />
  });
  return (
    <Grid container spacing={2}>
      {listOfVideos}
    </Grid>
  );
}
export default VideoList;
