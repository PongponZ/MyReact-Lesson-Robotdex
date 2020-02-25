import React,{Component} from 'react';
import './App.css';
import { CardList } from './Components/Card-list/Card-list.Component';

class App extends Component{
  constructor(){
    super();
    this.state = {
        marvel:[],
        searchField:""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({marvel:users}))
  }

  render(){
    return(
      <div>

          <input type = "search" placeholder = "Search Name" 
            onChange ={e => this.setState({searchField: e.target.value})}/>

          <CardList marvel = {this.state.marvel}/>
          
      </div>
    )
  }
}

export default App;
