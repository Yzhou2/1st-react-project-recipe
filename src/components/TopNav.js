import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  constructor() {
    super();
      this.state = {
          menuActive: false,
          navresult:[]

      }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
   let menuState = !this.state.menuActive;
   this.setState({
     menuActive: menuState
   });
 }

componentDidMount(){

}


 render() {
     let menu;
     if(this.state.menuActive) {
       menu = <div className="dropdownMenu">

                  <div className='dropdown'>
                     <Link to='/searchresults/healthy'><li > Healthy </li></Link>
                     <hr/>
                     <Link to='/searchresults/One-Pot'><li> One-Pot </li></Link>
                     <hr/>
                     <Link to='/searchresults/Vegan'><li> Vegan </li></Link>
                     <hr/>
                     <Link to='/searchresults/Vegetarian'><li> Vegetarian </li></Link>
                     <hr/>
                     <Link to='/searchresults/lowFat'><li> Low-Fat </li></Link>
                     <hr/>
                     <Link to='/searchresults/Asian'><li> Asian </li></Link>
                     <hr/>
                     <Link to='/searchresults/Indian'><li> Indian </li></Link>
                     <hr/>
                     <Link to='/searchresults/South America'><li> South America </li></Link>
                     <hr/>
                   </div>

                   <div className='dropdown'>
                     <Link to='/searchresults/European'><li> European </li></Link>
                     <hr/>
                     <Link to='/searchresults/African'><li> African </li></Link>
                     <hr/>
                     <Link to='/searchresults/Snacks'><li> Dessert & Snacks </li></Link>
                     <hr/>
                     <Link to='/searchresults/Dinner'><li> Dinner </li></Link>
                     <hr/>
                     <Link to='/searchresults/Drinks'><li> Drinks </li></Link>
                     <hr/>
                     <Link to='/searchresults/Salad'><li> Salad </li></Link>
                     <hr/>
                     <Link to='/searchresults/Soup'><li> Soup </li></Link>
                     <hr/>
                    </div>



               </div>
     } else {
       menu = "";
     }
     return (
       <div className='TopNav'>
          {menu}
          <button onClick={this.toggleMenu} className='main_cta'> BROWSE </button>


     </div>
    // <Menus onClick={} name="Carrots" />
    // <Menus  name="apples"/>
    // <Menus />
     )
   }
 }


export default TopNav;
