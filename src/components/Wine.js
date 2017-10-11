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
        arrows: true,
        className: 'slide',
        speed: 1000,
        fade: true,
        // slidesToShow: 1,
        // slidesToScroll: 1
      };

      // <Slider {...settings}>
      //     <div><h3>11111111111</h3></div>
      //     <div><h3>22222222222</h3></div>
      //     <div><h3>33333333333</h3></div>
      //     <div><h3>44444444444</h3></div>
      //     <div><h3>55555555555</h3></div>
      //     <div><h3>66666666666</h3></div>
      //   </Slider>


  return (
    <div className="wineStore">
        <div className="storeBody"></div>
        <div className="storeBottom">
          <div className="wineWrapper">
            <div className="innerWrapper">
              <div className="wineDetails"></div>
              <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_coulon_mv_750.png" className="inactiveWine"/>
              <img src="http://www.winedeals.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_famey_trad_malbec_11_750.png" className="activeWine" />
              <img src="https://www.foleyfoodandwinesociety.com/assets/images/products/pictures/1312-5601.png" className="inactiveWine"/>
            </div>
            <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/s/m/smith_son_cab_12_750.png" className="inactiveWine"/>
            <img src="http://pngimg.com/uploads/wine/wine_PNG9462.png" className="inactiveWine"/>
          </div>
        </div>
    </div>
    )
  }
}

export default Wine;
