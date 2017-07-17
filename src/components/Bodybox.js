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

  componentDidMount() {
      foods(this.props.main).then((res) => {
        this.setState({
          recipesHolder: res
        })
      })

  }


  render() {
    var recipeImgURL = this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(0,4)

  return (
    <div className="optionWrapper">
      {recipeImgURL}
    </div>
   )
 }
}




export default Bodybox;
