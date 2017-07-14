import React, { Component } from 'react';
import '../App.css';
import Menu from './Menu'

export default function Header() {
  return (
    <div className='Header'>
      <div className='logo'></div>
        <nav className='top_nav'>
            <li> Menu type </li>
            <li>World Cuisine</li>
            <li>Quick & Easy</li>
            <li>Tool Box</li>
          </nav>
    </div>
  )
}
