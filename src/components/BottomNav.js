import React, { Component } from 'react';
import '../App.css';

export default function() {
  return (
    <div className="BottomNav">
        <div className="menu">

          <div className='menuNav'>

          <div className='bottomFlex'>
            <p className='bottom_Text'>About Us</p>
            <p className='bottom_Text'>Contact Us</p>
            <p className='bottom_Text'>Advertise With Us</p>
            <p className='bottom_Text'>User Terms</p>
            <p className='bottom_Text'>Privacy</p>
            </div>


          <div className='bottomFlex'>
            <p className='red'><i className="fa fa-facebook-official" aria-hidden="true"></i></p>
            <p className='red'><i className="fa fa-instagram" aria-hidden="true"></i></p>
            <p className='red'><i className="fa fa-twitter-square" aria-hidden="true"></i></p>
            <p className='foodies'>© 2017 Created By Yiran Heathcote.</p>
          </div>


            </div>




          <img className='bottomLogo' src='https://image.ibb.co/jZdvNv/150014282535833.png' />
          </div>


      </div>
  )
}
