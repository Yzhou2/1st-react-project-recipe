import React, { Component } from 'react';
import '../App.css';
import Menu from './Menu';
import TopNav from './TopNav';

export default function Header() {
  return (
    <div className='Header'>
      <div className='logo'>
        <img src="https://image.ibb.co/jZdvNv/150014282535833.png" alt="150014282535833" />
      </div>
        <nav className='top_nav'>
          <TopNav />
          </nav>
    </div>
  )
}
