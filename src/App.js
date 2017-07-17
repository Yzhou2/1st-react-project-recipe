import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar';
import MainBody from './components/MainBody';
import BottomNav from './components/BottomNav';
import router from './router';

import SearchResult from './components/SearchResult'


class App extends Component {
  render() {
    return (
      <div className="app_container">
      <div className='backGroundFont'>
          <Header />
          <div className='psHolder'></div>
        <div className='body_wrapper'>
          </div>
          { router }
          <BottomNav />
        </div>

      </div>
    );
  }
}

export default App;
