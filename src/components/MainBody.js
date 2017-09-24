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
        <p className="subtitle">World Cuisines</p>
        </div>

      <div className="worldwraper">
        <div className="country">
          <Link to='/searchresults/mexican'><div className="countrypic"><img src='https://i.imgur.com/vrgIjOF.png' /></div></Link>
          <Link to='/searchresults/mexican'><div className="countryName">Mexican</div></Link>
        </div>
        <div className="country">
          <Link to='/searchresults/American'><div className="countrypic"><img src='https://i.imgur.com/Te6WGAy.jpg' /></div></Link>
          <Link to='/searchresults/American'><div className="countryName">American</div></Link>
        </div>
        <div className="country">
          <Link to='/searchresults/chinese'><div className="countrypic"><img src='https://i.imgur.com/XbkB3Mc.jpg' /></div></Link>
          <Link to='/searchresults/chinese'><div className="countryName">Chinese</div></Link>
        </div>
        <div className="country">
          <Link to='/searchresults/japanese'><div className="countrypic"><img src='https://i.imgur.com/fhyxGvr.png' /></div></Link>
          <Link to='/searchresults/japanese'><div className="countryName">Japanese</div></Link>
        </div>
        <div className="country">
          <Link to='/searchresults/african'><div className="countrypic"><img src='https://i.imgur.com/R2Jsk0X.jpg' /></div></Link>
          <Link to='/searchresults/african'><div className="countryName">African</div></Link>
        </div>
        <div className="country">
          <Link to='/searchresults/greek'><div className="countrypic"><img src='https://i.imgur.com/4IRSgLX.png' /></div></Link>
          <Link to='/searchresults/greek'><div className="countryName">Greek</div></Link>
        </div>
      </div>



      </div>



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
