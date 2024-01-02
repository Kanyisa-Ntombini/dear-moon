import React from 'react';
import styles from './Header.module.css';

function Mobile() {
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
    <div className={styles.Mobile}>
      <h1>Dear Moon</h1>
      <nav className={styles.SideNav} id="SideNav">
        <div
          onClick={openNav}
          className={styles.HamburgerIcon}
          id="hamburgerIcon"
        >
          &#8801;
        </div>
        <div onClick={closeNav} className={styles.CrossIcon} id="crossIcon">
          &times;
        </div>
        {navLinks}
      </nav>
    </div>
  );
}

function Desktop() {
  const pages = ['home', 'about', 'blog', 'contact'];
  const navLinks = pages.map((page) => {
    return (
      <li key={page}>
        <a href={'#' + page}>{page.toUpperCase()}</a>
      </li>
    );
  });

  return (
    <div className={styles.Desktop}>
      <h1>Dear Moon</h1>
      <nav>{navLinks}</nav>
    </div>
  );
}

function Header() {
  return (
    <header className={styles.Header}>
      <Mobile />
      <Desktop />
    </header>
  );
}

export default Header;
