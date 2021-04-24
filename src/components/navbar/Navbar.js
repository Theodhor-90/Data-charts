import React from 'react';
import NavRight from './NavRight';

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      burger: false
    }
    this.updateBurger = this.updateBurger.bind(this);
    this.scanWidth = this.scanWidth.bind(this);
  }

  scanWidth(){
    if(this.state.burger && window.innerWidth > 950){
      this.setState({ burger: false });
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.scanWidth)
  }

  updateBurger(){
    this.setState({ burger: !this.state.burger});
  }

  render(){
    return(
      <div className={`nav-container ${this.state.burger ? 'burger-active' : ''}`}>
        <div className='navbar flex between fw fh absolute'>
          <div className='navbar-left flex fh'>
            <div className='centralizer roboto-bold'>Covid UK</div>
          </div>
          <NavRight
            navbarKey={this.props.navbarKey}
            cN='navbar-right flex fh'
            handleKey={this.props.handleKey}
          />
          <div
            className={`burger flex column ${this.state.burger ? 'burger-active' : ''}`}
            onClick={this.updateBurger}>
            <div className='line-1'></div>
            <div className='line-2'></div>
            <div className='line-3'></div>
          </div>
        </div>
        <NavRight
          navbarKey={this.props.navbarKey}
          cN='nav-mobile flex around fw fh absolute'
          handleKey={this.props.handleKey}
        />
      </div>
    )

  }
}

export default Header;
