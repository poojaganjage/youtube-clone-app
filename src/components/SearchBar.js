import React, {useState} from 'react';
import {Paper, TextField} from '@mui/material';

function SearchBar({onFormSubmit}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  }
  return (
    <Paper elevation={6} style={{padding: '25px'}}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label='Search...' onChange={handleChange} />
      </form>
    </Paper>
  );
}
export default SearchBar;
