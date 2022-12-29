import Grid from '@mui/material/Grid';
import Style from './baseLayout.module.scss';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ArtGallery from '../ArtGallery/ArtGallery';
// import Home from './home/Home';

export default function BaseLayout() {
  const [darkmode, setDarkmode] = useState(false);
  function handleClick() {
    setDarkmode(!darkmode);
  }

  return (
    <Box className={darkmode ? Style.dark : Style.light}>
      <Grid
        container
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between"
      >
        <Grid item>
          <Navbar
          darkmode={true}
          handleClick={function (): void {
            throw new Error('Function not implemented.');
          }}
          />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route path={'/'} element={<ArtGallery />} />
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
}
