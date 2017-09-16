import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import { foods } from '../server/server';
import { Link } from 'react-router-dom'


export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchresult:[],
      page:2
    }

    this.changePage = this.changePage.bind(this);
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
    console.log(newProps, 'we are looking for this msg')

    foods( newProps.match.params.food ).then((res)=>{
      console.log(newProps.match.params.food);
      this.setState({
        searchresult: res
      })
    })
  }

  changePage() {
    // this.setState((previousState)=>({
    //   page: previousState.page + 1
    // }))
    this.setState({
      page: this.state.page + 1
    })

  }


render() {
  console.log(this.state.page)
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

          <Link to={`/searchresults/healthy&page=${this.state.page}`}><button onClick={this.changePage}> see more recipes </button></Link>

        </div>

    )
  }
}
