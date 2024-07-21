import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/movies">Movie Search</Link>
        </li>
        <li>
          <Link to="/tasks">Task List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
