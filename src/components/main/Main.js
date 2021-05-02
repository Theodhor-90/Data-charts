import React from 'react';
import DoughnutChart from './DoughnutChart';
import MainInfo from './MainInfo';
import MainData from './MainData';
import Map from './Map';
import LineChart from './LineChart';

/*
    Defined as a Class, with the possibility to introduce the option to switch between data related to cases or fatalities.
    In that case only the "Main" component would be rerendered when the switch happens.
*/

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartShow: 'weekly'
        }
        this.setWeekly = this.setWeekly.bind(this);
        this.setMonthly = this.setMonthly.bind(this);
    }

    setWeekly(){
        this.setState({chartShow: 'weekly'})
      }
      setMonthly(){
          console.log(this.state)
        this.setState({chartShow: 'monthly'})
      }

    render(){
        return(
            <div className='fw'>
                <div className='flex around fw flex-wrapper'>
                    <Map country={this.props.navbarKey} />
                    {this.props.navbarKey === 'uk' ? 
                        <DoughnutChart data={[
                            this.props.data.england.data.dailyCases,
                            this.props.data.scotland.data.dailyCases,
                            this.props.data.wales.data.dailyCases,
                            this.props.data.ireland.data.dailyCases
                        ]} />
                        :
                        <MainData />
                    }
                    <MainInfo data={this.props.data[this.props.navbarKey].data}/>
                </div>
                <LineChart 
                weeklyCases={this.props.data[this.props.navbarKey].data.weeklyCases} 
                monthlyCases={this.props.data[this.props.navbarKey].data.monthlyCases}
                chartShow={this.state.chartShow}
                setMonthly={this.setMonthly}
                setWeekly={this.setWeekly}/>
            </div>
         
        )
    }
}


export default Main;

