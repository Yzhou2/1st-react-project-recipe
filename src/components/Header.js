import React, { Component } from 'react';
import '../App.css';
import Menu from './Menu';
import TopNav from './TopNav';

export default function Header() {
  return (
    <div className='Header'>
      <div className="innerHeader">
          <div className='logo'>
            <img src="https://image.ibb.co/jZdvNv/150014282535833.png" alt="150014282535833" />
          </div>

          <div className="logoNav">
            <div>
            <span>Recipes</span>
            <i className="downarrow fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <div>Wine</div>
            <div>Kitchenware</div>
            <div>Contact</div>
          </div>
        </div>

        <div className='top_nav'>
          <TopNav />
        </div>
    </div>
  )
}
