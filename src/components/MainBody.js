import React, { Component } from 'react';
import Bodybox from './Bodybox';
import TopBar from './TopBar';

export default class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchFoods = this.searchFoods.bind(this);
  }

  searchFoods() {
    this.props.history.push(`/searchresults/${ this.state.input }`)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }




  render() {
  return (
    <div className='body_container'>
      <TopBar handleChange={this.handleChange} input={this.state.input} searchFoods={this.searchFoods}/>
      <div className="body_inner">
        <div className='body_title'>
        Quick & Easy
        </div>

        <Bodybox main={'Quick Easy'}/>
      </div>


      <div className='body_inner'>
        <div className='body_title'>
        Foodies Goodies Best
        </div>

        <Bodybox main={'best'}/>
      </div>


      <div className='body_inner'>
        <div className='body_title'>
        Most Recent Recipes
        </div>

        <Bodybox main={''}/>
      </div>

    </div>
    )
  }
}
