import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import { foods } from '../server/server';


export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchresult:[]
    }


  }

  componentDidMount() {
    foods( this.props.match.params.food ).then((res)=>{
      console.log(this.props.match.params.food);
      this.setState({
        searchresult: res
      })
    })
  }


  componentWillReceiveProps(newProps) {
    // console.log('before http call',this.props.match.params.food)
    foods( newProps.match.params.food ).then((res)=>{
      console.log(newProps.match.params.food);
      this.setState({
        searchresult: res
      })
    })
  }

render() {
  return (
    <div className='search_Result_container'>
    { this.state.searchresult.length > 0 ? this.state.searchresult.map( ( food, idx ) => {
      return (
          <div key={idx} className='column'>
                <div className="foodPic"><a href={food.source_url}><img src={food.image_url}/></a>
                <a href={food.source_url}><div className='foodTitle'>{food.title}</div></a>
                <div className='publisher'>{food.publisher}</div>
                </div>
              </div>

      )
    }) : null }

        </div>

    )
  }
}
