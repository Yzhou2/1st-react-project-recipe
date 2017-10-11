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
        className: 'slide',
        speed: 1000,
        fade: true,
        // slidesToShow: 1,
        // slidesToScroll: 1
      };


  return (
    <Slider {...settings}>
    <div className="wineStore">
        <div className="storeBody"></div>
        <div className="storeBottom">
          <div className="wineWrapper">
            <div className="innerWrapper">
              <div className="wineDetails">
                <div className="wineTitle">PAMARY</div>
                <div className="winePrice">$ 125.99 </div>
                <div className="wineDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                <div className="wineBuy"><span>Buy Now</span></div>

              </div>
              <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_coulon_mv_750.png" className="inactiveWine"/>
              <img src="http://www.winedeals.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_famey_trad_malbec_11_750.png" className="activeWine" />
              <img src="https://www.foleyfoodandwinesociety.com/assets/images/products/pictures/1312-5601.png" className="inactiveWine"/>
            </div>
            <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/s/m/smith_son_cab_12_750.png" className="inactiveWine"/>
            <img src="http://pngimg.com/uploads/wine/wine_PNG9462.png" className="inactiveWine"/>
          </div>
        </div>
    </div>
        <div className="wineStore">
        <div className="storeBody"></div>
        <div className="storeBottom">
          <div className="wineWrapper">
            <div className="innerWrapper">
              <div className="wineDetails">
                <div className="wineTitle">SEBASTIANI</div>
                <div className="winePrice">$ 225.99 </div>
                <div className="wineDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                <div className="wineBuy"><span>Buy Now</span></div>

              </div>
              <img src="http://www.winedeals.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_famey_trad_malbec_11_750.png" className="inactiveWine"/>
              <img src="https://www.foleyfoodandwinesociety.com/assets/images/products/pictures/1312-5601.png" className="activeWine" />
              <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/s/m/smith_son_cab_12_750.png" className="inactiveWine"/>
            </div>
            <img src="http://pngimg.com/uploads/wine/wine_PNG9462.png" className="inactiveWine"/>
            <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_coulon_mv_750.png" className="inactiveWine"/>
          </div>
        </div>
    </div>
        <div className="wineStore">
        <div className="storeBody"></div>
        <div className="storeBottom">
          <div className="wineWrapper">
            <div className="innerWrapper">
              <div className="wineDetails">
                <div className="wineTitle">SMITH & SON</div>
                <div className="winePrice">$ 85.99 </div>
                <div className="wineDesc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className="wineBuy"><span>Buy Now</span></div>

              </div>
              <img src="https://www.foleyfoodandwinesociety.com/assets/images/products/pictures/1312-5601.png" className="inactiveWine"/>
              <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/s/m/smith_son_cab_12_750.png" className="activeWine" />
              <img src="http://pngimg.com/uploads/wine/wine_PNG9462.png" className="inactiveWine"/>
            </div>
            <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_coulon_mv_750.png" className="inactiveWine"/>
            <img src="http://www.winedeals.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_famey_trad_malbec_11_750.png" className="inactiveWine"/>
          </div>
        </div>
    </div>
        <div className="wineStore">
        <div className="storeBody"></div>
        <div className="storeBottom">
          <div className="wineWrapper">
            <div className="innerWrapper">
              <div className="wineDetails">
                <div className="wineTitle">White KNIGHT</div>
                <div className="winePrice">$ 585.99 </div>
                <div className="wineDesc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className="wineBuy"><span>Buy Now</span></div>

              </div>
              <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/s/m/smith_son_cab_12_750.png" className="inactiveWine"/>
              <img src="http://pngimg.com/uploads/wine/wine_PNG9462.png" className="activeWine activeX" />
              <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_coulon_mv_750.png" className="inactiveWine"/>
            </div>
            <img src="http://www.winedeals.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_famey_trad_malbec_11_750.png" className="inactiveWine"/>
            <img src="https://www.foleyfoodandwinesociety.com/assets/images/products/pictures/1312-5601.png" className="inactiveWine"/>
          </div>
        </div>
    </div>
        <div className="wineStore">
        <div className="storeBody"></div>
        <div className="storeBottom">
          <div className="wineWrapper">
            <div className="innerWrapper">
              <div className="wineDetails">
                <div className="wineTitle">CHALEAU COULON</div>
                <div className="winePrice">$ 385.99 </div>
                <div className="wineDesc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</div>
                <div className="wineBuy"><span>Buy Now</span></div>

              </div>
              <img src="http://pngimg.com/uploads/wine/wine_PNG9462.png" className="inactiveWine"/>
              <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_coulon_mv_750.png" className="activeWine" />
              <img src="http://www.winedeals.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/c/h/ch_famey_trad_malbec_11_750.png" className="inactiveWine"/>
            </div>
            <img src="https://www.foleyfoodandwinesociety.com/assets/images/products/pictures/1312-5601.png" className="inactiveWine"/>
            <img src="http://www.winemadeeasy.com/media/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/s/m/smith_son_cab_12_750.png" className="inactiveWine"/>
          </div>
        </div>
    </div>
      </Slider>
    )
  }
}

export default Wine;
