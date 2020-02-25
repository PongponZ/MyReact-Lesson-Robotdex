import React,{Component} from 'react';
import './App.css';
import { CardList } from './Components/Card-list/Card-list.Component';
import { SeachBox } from './Components/Search-box/Seach-box.Component';

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
    const {marvel ,searchField} = this.state
    const filterMarvel = marvel.filter(marvel => marvel.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className ='App'>
          <h1>Marvel RobotDex</h1>
          <SeachBox placeholder = "Seach Box" handlechanged = {e => this.setState({searchField: e.target.value})}/>
          <CardList marvel = {filterMarvel}/>
          
      </div>
    )
  }
}

export default App;
