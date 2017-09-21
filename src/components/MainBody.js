import React, { Component } from 'react';
import Bodybox from './Bodybox';
import TopBar from './TopBar';
import { Link } from 'react-router-dom';

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
        <p className="subtitle">Quick & Easy</p>
        <Link to='/searchresults/quick'><p>SEE ALL</p></Link>
        </div>


        <Bodybox main={'Quick Easy'}/>
      </div>


      <div className='body_inner'>
        <div className='body_title'>
        <p className="subtitle">Foodies Goodies Best</p>
        <Link to='/searchresults/best'><p>SEE ALL</p></Link>
        </div>

        <Bodybox main={'best'}/>
      </div>


      <div className='body_inner'>
        <div className='body_title'>
        <p className="subtitle">Random Browse</p>
        <Link to='/searchresults/fish'><p>SEE ALL</p></Link>
        </div>

        <Bodybox main={''}/>
      </div>

    </div>
    )
  }
}
