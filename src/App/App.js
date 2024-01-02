import React from 'react';
import './reset.css';
import styles from './App.module.css';
import Header from '../Header/Header';
import AboutPage from '../AboutPage/AboutPage';
import BlogArticles from '../BlogArticles/BlogArticles';
import ContactMe from '../ContactMe/ContactMe';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <AboutPage />
        <BlogArticles />
        <ContactMe />
      </main>
      <footer>&copy; 2024 K Ntombini</footer>
    </div>
  );
}

export default App;
