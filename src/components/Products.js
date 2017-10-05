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
            <div className="producPic">
              <img src="https://i.pinimg.com/736x/e0/5c/a6/e05ca6c165b520c88d4b4da63f783674--stoneware-dinnerware-sets-kitchen-essentials.jpg" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>

          <div className="singleProduct">
            <div className="producPic">
              <img src="http://images.shophq.com/is/image/ShopHQ/462-988?DefaultImage=1&$472x472_jpg$" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>

          <div className="singleProduct">
            <div className="producPic">
              <img src="https://i5.walmartimages.com/asr/a86c7790-7f83-4f6c-a2ce-76ccf3198e5d_1.38de46af200c15646a8813f39fb2c01b.jpeg" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>

          <div className="singleProduct">
            <div className="producPic">
              <img src="https://i5.walmartimages.com/asr/006fa372-b5af-45ac-971a-47b2f574f431_1.a2b3eb59265b5ae0a73fafca06afc1e3.jpeg" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>


          <div className="singleProduct">
            <div className="producPic">
              <img src="https://t4.ftcdn.net/jpg/00/81/43/63/240_F_81436375_l5bXGoCVPy6OBvq7zyBI6ExacRSuaQxC.jpg" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>


          <div className="singleProduct">
            <div className="producPic">
              <img src="http://images.kuhnrikonshop.com/imagesEdp/p214812z.jpg" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>

          <div className="singleProduct">
            <div className="producPic">
              <img src="https://i.pinimg.com/736x/d0/89/ee/d089eeec1cc66fba710ac617a20c3ba6--tongs-kitchen-essentials.jpg" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>

          <div className="singleProduct">
            <div className="producPic">
              <img src="https://www.kitchenislandsgiant.com/images/18796/Tremelti-Kitchen-Essentials-Paddle-Grater-For-Spices-Cheese-Citrus-Zesting-Parmesan-Grating-1pc-19.jpg" />
            </div>
            <div className="productInfo">
              <div className="price"><span>$ 20</span>.00</div>
              <div className="_atc">add to cart</div>
            </div>
          </div>


        </div>
      </div>
    </div>
    )
  }
}
