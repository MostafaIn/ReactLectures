import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header
        const headerImg='./images/Header-img.png'
        const borderLine='./images/Border-BG.jpg'
      />
      <Main
        const mobileIcon={<i className="fas fa-mobile-alt"></i>}
        const desktopIcon={<i className="fas fa-desktop"></i>}
        const laptopIcon={<i className="fas fa-laptop"></i>}
        const recycleIcon={<i className="fas fa-recycle"></i>}
        const borderLine2='./images/Border-BG.jpg'
        const blogImg='./images/img-placeholder.png'
      />
      <Footer
        const twitterIcon={<i className="fab fa-twitter-square"></i>}
        const facebookIcon={<i className="fab fa-facebook-square"></i>}
        const linkedinIcon={<i className="fab fa-linkedin"></i>}
        const gplusIcon={<i className="fab fa-google-plus-square"></i>}
        const vimeoIcon={<i className="fab fa-vimeo-square"></i>}
      />
    </div>
  );
}

export default App;
