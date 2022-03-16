import React from 'react';
import './Sidebar.stlyes.scss';

import { NavLink } from 'react-router-dom';

function Sidebar() {
  const isActive = ({ isActive }) => (isActive ? 'is-active ' : '');

  return (
    <nav className='sidebar'>
      <ul className='sidebar-list'>
        <li className='sidebar-list--item'>search</li>
        <li className='sidebar-list--item'>
          <NavLink className={isActive} to='/games'>
            Games
          </NavLink>
        </li>
        <li className='sidebar-list--item'>
          <NavLink className={isActive} to='/game'>
            Game ALONE
          </NavLink>
        </li>
        <li className='sidebar-list--item'>screenshots</li>
        <li className='sidebar-list--item'>live streams </li>
        <li className='sidebar-list--item'>
          <NavLink className={isActive} to='/genres'>
            Genres
          </NavLink>
        </li>
        <li className='sidebar-list--item'>plataformas</li>
        <li className='sidebar-list--item'> latest games </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
