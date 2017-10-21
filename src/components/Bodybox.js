import React, { Component } from 'react';
import '../App.css';
import { foods } from './foodAPI';
import OptionInner from './OptionInner';
import axios from 'axios';



class Bodybox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipesHolder: null
    }
  }

  componentDidMount() {
      // foods(this.props.main).then((res) => {
      //   this.setState({
      //     recipesHolder: res
      //   })
      // })
      console.log(this.props.main, 'whats been searched???????????')
      axios.get(`http://localhost:8080/api/getRecipes/${this.props.main}`, {withCredentials:true}).then(res => {
        console.log(res,'this is recipe from backend')
        this.setState({
          recipesHolder: res
        })
      })

  }


  render() {

    console.log(this.state.recipesHolder, 'this state recipeholder!!!!!!!!|||||||||||')


    var quickeasyOne = this.state.recipesHolder ?
      this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(23,1)
    :
    ""

    var quickeasyTwo = this.state.recipesHolder ?
      this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(10,1)
    :
    ""

    var quickeasyThree = this.state.recipesHolder ?
    this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(21,1)
    :
    ""

    var quickeasyFour = this.state.recipesHolder ?
    this.state.recipesHolder.map( (recipe, i)=>{
        return (<div className="options" key={i}> <OptionInner recipe={recipe}/> </div>)
    }).splice(25,1)
    :
    ""

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
