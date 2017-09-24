import React, { Component } from 'react';
import '../App.css';
import Menu from './Menu';
import TopNav from './TopNav';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='Header'>
      <div className="innerHeader">
          <div className='logo'>
            <img src="https://image.ibb.co/jZdvNv/150014282535833.png" alt="150014282535833" />
          </div>

          <ul className="logoNav">

              <li className="recipe">
                <div className="navLine recipeNav">
                  <span>Recipes</span>
                  <i className="downarrow fa fa-angle-down" aria-hidden="true"></i>
                </div>

                <ul className="recipeDrop">
                   <Link to='/searchresults/healthy'><li> Healthy </li></Link>

                   <Link to='/searchresults/One-Pot'><li> One-Pot </li></Link>

                   <Link to='/searchresults/Vegan'><li> Vegan </li></Link>

                   <Link to='/searchresults/Vegetarian'><li> Vegetarian </li></Link>

                   <Link to='/searchresults/lowFat'><li> Low-Fat </li></Link>

                   <Link to='/searchresults/Smoothies'><li>Smoothies</li></Link>
                </ul>
              </li>

            <li className="navLine">Wine</li>
            <li className="navLine">Kitchenware</li>
            <li className="navLine">Contact</li>
          </ul>
        </div>

        <div className='top_nav'>
          <div className="login"><span>Login</span></div>
        </div>
    </div>
  )
}
