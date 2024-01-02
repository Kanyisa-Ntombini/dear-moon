import React from 'react';
import './NavBar.css';

function NavBar() {
  const pages = ['home', 'about', 'blog', 'contact'];
  const navLinks = pages.map((page) => {
    return (
      <li key={page}>
        <a href={'#' + page}>{page.toUpperCase()}</a>
      </li>
    );
  });

  return <nav>{navLinks}</nav>;
}

export default NavBar;
