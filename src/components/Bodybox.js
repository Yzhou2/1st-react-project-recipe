import React, { Component } from 'react';
import '../App.css';
import { foods } from '../server/server';
import OptionInner from './OptionInner';



class Bodybox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipesHolder: []
    }
  }

  // componentDidMount() {
  //     foods(this.props.main).then((res) => {
  //       this.setState({
  //         recipesHolder: res
  //       })
  //     })
  //
  // }


  render() {
    var quickeasyOne = this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(23,1)

    var quickeasyTwo = this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(10,1)

    var quickeasyThree = this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(21,1)

    var quickeasyFour = this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(25,1)

  return (
    <div className="optionWrapper">
      {quickeasyOne}
      {quickeasyTwo}
      {quickeasyThree}
      {quickeasyFour}
    </div>
   )
 }
}




export default Bodybox;
