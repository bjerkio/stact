import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link to="/posts">Posts</Link>
      <Link to="/users">Users</Link>
      <Link to="/countries">Countries</Link>
    </nav>
  );
};

export default NavBar;
