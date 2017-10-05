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

      <div className="storeMenu">
        <div>Essentials</div>
        <div>Rugs</div>
        <div>Pots & Pans</div>
      </div>

      <div className="productStore">
        <div className="storeFrame">
          <div className="singleProduct">
            <div className="producPic">
              <img src="http://cdn.shopify.com/s/files/1/0203/1620/products/bambu-home-kitchen-basics-22720436621_grande.jpg?v=1497643746" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>

          <div className="singleProduct">
            <div className="producPic"></div>
            <div className="productInfo"></div>
          </div>

          <div className="singleProduct">
            <div className="producPic"></div>
            <div className="productInfo"></div>
          </div>

          <div className="singleProduct">
            <div className="producPic"></div>
            <div className="productInfo"></div>
          </div>

          <div className="singleProduct">
            <div className="producPic"></div>
            <div className="productInfo"></div>
          </div>


          <div className="singleProduct">
            <div className="producPic"></div>
            <div className="productInfo"></div>
          </div>


          <div className="singleProduct">
            <div className="producPic"></div>
            <div className="productInfo"></div>
          </div>

          <div className="singleProduct">
            <div className="producPic"></div>
            <div className="productInfo"></div>
          </div>

          <div className="singleProduct">
            <div className="producPic"></div>
            <div className="productInfo"></div>
          </div>


        </div>
      </div>
    </div>
    )
  }
}
