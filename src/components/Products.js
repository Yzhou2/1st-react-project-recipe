import React, { Component } from 'react';
import BottomNav from './BottomNav';
import Header from './Header';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }





  render() {



  return (
    <div>
      <div className="productsBanner">
        <img src="https://preview.ibb.co/jO57dw/Screen_Shot_2017_10_05_at_12_56_13_PM.png" />
        <div className="bannerTitle">Convinient, Elegant, Fun</div>
      </div>
    </div>
    )
  }
}
