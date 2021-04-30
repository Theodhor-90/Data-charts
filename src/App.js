import React from 'react';
import axios from 'axios';
import structure from './js/structure';
import { labels } from './js/structure';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import Title from './components/header/Title';
import Footer from './components/footer/Footer';
import stateStarter from './js/stateStarter';
import './css/style.css';
import './css/navbar.css';
import './css/media.css';
import './css/charts.css';
import './css/main.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
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
    ]).then(axios.spread((data1,data2,data3,data4,data5) => {
      //console.log(data1.data.data,data2.data.data)
      this.setState({ data:stateStarter([data1.data.data,data2.data.data,data3.data.data,data4.data.data,data5.data.data],labels)})
    }));
  }

  render(){
    if(this.state.data){
      console.log(this.state);
    }
    return(
      this.state.data? 
      <div className="main">
        <Navbar handleKey={this.handleKey} navbarKey={this.state.navbarKey} />
        <div className='flex flex-wrapper'>
          <Title country={this.state.navbarKey} />
          <Main data={this.state.data} navbarKey={this.state.navbarKey} />
        </div>
        <Footer />
      </div>
      
      :  

     <div className="App">
        NO  
     </div>
    )
  } 
}

   


export default App;
