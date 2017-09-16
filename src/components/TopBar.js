import React, { Component } from 'react';
import '../App.css';
import { foods } from '../server/server';
import { Link } from "react-router-dom";

class TopBar extends Component {



  render() {

  return (
    <div className='TopBar'>
      <div className='TopCenter'>

        <i className="fa fa-search" aria-hidden="true"></i>
        <input value={this.props.input} onChange={this.props.handleChange} placeholder="LOOKING FOR SOME RECIPES?" className='input'/>

        <button onClick={this.props.searchFoods} className='main_cta'>Search</button>

      </div>
    </div>
    )
  }
}

export default TopBar;
