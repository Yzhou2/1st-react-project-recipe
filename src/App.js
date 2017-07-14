import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar';
import MainBody from './components/MainBody';
import BottomNav from './components/BottomNav';

class App extends Component {
  render() {
    return (
      <div className="app_container">
          <Header />
          <TopBar />
        <div className='body_wrapper'>
          <MainBody />
        <div className='BottomNav'>
          <BottomNav />
        </div>  
        </div>
      </div>
    );
  }
}

export default App;
