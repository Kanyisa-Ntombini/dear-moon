import React from 'react';
import './Header.css';

const Mobile = () => {
  const openNav = () => {
    document.getElementById('SideNav').style.width = '100%';
    document.getElementById('hamburgerIcon').style.display = 'none';
  };

  function closeNav() {
    document.getElementById('SideNav').style.width = 0;
    document.getElementById('hamburgerIcon').style.display = 'block';
  }
  const pages = ['home', 'about', 'blog', 'contact'];
  const navLinks = pages.map((page) => {
    return (
      <li key={page}>
        <a onClick={closeNav} href={'#' + page}>
          {page.toUpperCase()}
        </a>
      </li>
    );
  });

  return (
    <div className="Mobile">
      <h1>Dear Moon</h1>
      <nav className="SideNav" id="SideNav">
        <div onClick={openNav} className="HamburgerIcon" id="hamburgerIcon">
          &#8801;
        </div>
        <div onClick={closeNav} className="CrossIcon" id="crossIcon">
          &times;
        </div>
        {navLinks}
      </nav>
    </div>
  );
};

const Desktop = () => {
  const pages = ['home', 'about', 'blog', 'contact'];
  const navLinks = pages.map((page) => {
    return (
      <li key={page}>
        <a href={'#' + page}>{page.toUpperCase()}</a>
      </li>
    );
  });

  return (
    <div className="Desktop">
      <h1>Dear Moon</h1>
      <nav>{navLinks}</nav>
    </div>
  );
};

function Header() {
  return (
    <header className="Header">
      <Mobile />
      <Desktop />
    </header>
  );
}

export default Header;
