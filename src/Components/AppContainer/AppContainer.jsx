import { SidebarDrawer } from '../SidebarDrawer/SidebarDrawer';
import Header from '../Header/Header';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './appcontainer.styles.scss';
import '../../App.scss';
import { Route, Routes } from 'react-router-dom';
import Game from '../../Pages/SingleGame/Game.jsx';
import Genres from '../../Pages/Genres/Genres';
import GameList from '../../Pages/GameList/GameList';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function AppContainer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <SidebarDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path='/' element={<GameList />} />
          <Route path='/list' element={<GameList />} />
          <Route path='/game' element={<Game />} />
          <Route path='/genres' element={<Genres />} />
        </Routes>
      </Box>
    </Box>
  );
}
