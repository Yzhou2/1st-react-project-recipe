import React, { Component } from 'react';
import BottomNav from './BottomNav';
import Header from './Header';
import { Link } from 'react-router-dom';

export default class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }





  render() {
  return (
    <div>
      <div className="sectionBox">
        <div className="leftbox">
          <div className="leftmiddleBox">YOUR   <span>DREAM</span> <br/> KITCHEN</div>
        </div>
        <div className="rightbox">
          <img src='https://i.imgur.com/qjPOruG.jpg' />
        </div>

      </div>
    </div>
    )
  }
}
