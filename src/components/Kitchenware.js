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

      <div className="sectionBox">
      <div className="rightbox">
        <img src='https://i.imgur.com/CzHdUxQ.jpg' />
      </div>

      <div className="leftbox">
        <div className="insertLine"></div>
        <div className="textBox">
          <div className="textTitle">Essentials</div>
          <div className="textBody">Our essential collection emphasize convinience, fun and innovative craftsmanship for your dream kitchen.</div>
          <div className="viewall">VIEW ALL</div>
        </div>
      </div>
      </div>

        <div className="sectionBox">
          <div className="leftbox">
            <div className="textBox">
              <div className="textTitle">Essentials</div>
              <div className="textBody">Our essential collection emphasize convinience, fun and innovative craftsmanship for your dream kitchen.</div>
              <div className="viewall">VIEW ALL</div>
            </div>

            <div className="insertLine"></div>
          </div>

          <div className="rightbox">
            <img src='https://i.imgur.com/CzHdUxQ.jpg' />
          </div>
      </div>


    </div>
    )
  }
}
