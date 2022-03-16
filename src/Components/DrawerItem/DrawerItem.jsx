import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Divider,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import './drawer-item.styless.scss';

import { IoLogoGameControllerB, IoLogoGameControllerA } from 'react-icons/io';
import { GiPistolGun } from 'react-icons/gi';
import { ImPacman } from 'react-icons/im';

export default function DrawerItem({ text, open }) {
  return (
    <NavLink to={text} key={text} className='drawer-item'>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          <div className='drawer-icon'>
            {(() => {
              switch (text) {
                case 'genres':
                  return <GiPistolGun />;
                case 'list':
                  return <IoLogoGameControllerB />;
                case 'game':
                  return <ImPacman className='pacman' />;

                default:
                  return null;
              }
            })()}
          </div>
        </ListItemIcon>
        <ListItemText
          primary={text[0].toUpperCase() + text.slice(1)}
          sx={{
            opacity: open ? 1 : 0,
          }}
        />
      </ListItemButton>
      <Divider />
    </NavLink>
  );
}
