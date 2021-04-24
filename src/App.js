import React from 'react';
import axios from 'axios';
import structure from './js/structure';
import Navbar from './components/navbar/Navbar';
import './css/style.css';
import './css/navbar.css';
import './css/media.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {data: null, navbarKey: 'uk'}
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(entry){
    this.setState({navbarKey: entry})
  }

  componentDidMount(){
    axios.get(structure.uk).then((data) => this.setState({data: data}))
  }

  render(){
    console.log(this.state.data);
    return(
      this.state.data ? 
      <Navbar handleKey={this.handleKey} navbarKey={this.state.navbarKey} />
      :  

     <div className="App">
        NO  
     </div>
    )
  } 
}

   


export default App;
