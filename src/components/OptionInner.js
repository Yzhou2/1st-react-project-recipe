import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';



class OptionInner extends Component {
  // constructor(props) {
  //   super(props);
  // }




render() {
  return (
    <div className='innerBoxCard'>
      <div className='img'>
      <Link to={this.props.recipe.source_url}>
      <img src={this.props.recipe.image_url} />
      </Link>
      </div>

      <div className='title'>
        <a href={this.props.recipe.source_url}>
        <div className='recipeTitle'>{this.props.recipe.title}</div>
        </a>
        <div className='publisherTitle'>{this.props.recipe.publisher}</div>
      </div>
    </div>
    )
  }
}

export default OptionInner;
