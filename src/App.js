import React from 'react';
import axios from 'axios';
import structure from './js/structure';
import Navbar from './components/navbar/Navbar';
import Intro from './components/Intro';
import Overview from './components/charts/Overview';
import './css/style.css';
import './css/navbar.css';
import './css/media.css';
import './css/charts.css';
import './css/main.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      uk: null,
      england: null,
      scotland: null,
      wales: null,
      ireland: null, 
      navbarKey: 'uk'
    }
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(entry){
    this.setState({navbarKey: entry})   
  }

  componentDidMount(){
    axios.all([
      axios.get(structure.uk),
      axios.get(structure.england),
      axios.get(structure.scotland),
      axios.get(structure.wales),
      axios.get(structure.ireland)
    ]).then(axios.spread((data1,data2,data3,data4,data5) => this.setState({
      uk: data1.data.data,
      england: data2.data.data,
      scotland: data3.data.data,
      wales: data4.data.data,
      ireland: data5.data.data
    })))
  }

  render(){
    if(this.state.england && this.state.uk){
      console.log(this.state.england[0],this.state.uk[0]);
    }
    return(
      this.state.uk? 
      <div className="main">
        <Navbar handleKey={this.handleKey} navbarKey={this.state.navbarKey} />
        <Intro country={this.state.navbarKey} />
        <Overview 
          england={this.state.england} 
          scotland={this.state.scotland} 
          wales={this.state.wales} 
          ireland={this.state.ireland} 
          data={this.state[this.state.navbarKey]}/>
      </div>
      
      :  

     <div className="App">
        NO  
     </div>
    )
  } 
}

   


export default App;
