import React, { Component } from 'react';
import '../App.css';
import { foods } from '../server/server';
import { Link } from "react-router-dom";

class TopBar extends Component {


  render() {

  return (
    <div className='TopBar'>
    <video preload='auto' loop='loop' muted='muted' autoPlay='true' className='video'>
      <source src="https://dl.dropboxusercontent.com/s/ysbl14povc90azh/topBarVid.mp4" type="video/mp4" />
      Video Not Supported
    </video>

    <div className='TopCenter'>



      <div className='TopBarWords'>LOOKING FOR SOME RECIPES?</div>
      <input value={this.props.input} onChange={this.props.handleChange} className='input'/>

      <button onClick={this.props.searchFoods} className='main_cta'>Search</button>

    </div>
    </div>
    )
  }
}

export default TopBar;
