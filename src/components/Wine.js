import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';



class Wine extends Component {
  // constructor(props) {
  //   super(props);
  // }




render() {
  var settings = {
        dots: true,
        speed: 1000,
        fade: true,
        // slidesToShow: 1,
        // slidesToScroll: 1
      };



  return (
    <div className="wineStore">
      <Slider {...settings}>
          <div><h3>11111111111</h3></div>
          <div><h3>22222222222</h3></div>
          <div><h3>33333333333</h3></div>
          <div><h3>44444444444</h3></div>
          <div><h3>55555555555</h3></div>
          <div><h3>66666666666</h3></div>
        </Slider>
    </div>
    )
  }
}

export default Wine;
