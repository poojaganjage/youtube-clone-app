import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';

function VideoItem({video, onSelectVideo}) {
  const handleClick = () => {
    onSelectVideo(video);
  }
  return (
    <Grid item xs={18}>
      <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={handleClick}>
        <img style={{marginRight: '20px'}} alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
        <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  );
}
export default VideoItem;
