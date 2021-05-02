import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartData, options} from '../../js/chartData';
import { verticalTicks } from '../../js/verticalTicks';

const LineChart = (props) => {
  const numbers =[], dates = [];
  let days = 0;
  if(props.chartShow==='weekly'){
    props.weeklyCases.forEach(element => {
      numbers.push(element.cases);
      dates.push(element.date);
    });
    days = 7;
  } else {
    props.monthlyCases.forEach(element => {
      numbers.push(element.cases);
      dates.push(element.date);
    });
    days = 30;
  }
  dates.push('');
  console.log(numbers,props.chartShow);
  

  return(
    <div className='centralizer column flex-wrap fw back-normal v-padding-medium'>
      <div className='line-container relative flex column'>
        <div className='absolute flex right-0'>
          <div className={`centralizer  line-chart-button ${props.chartShow==='weekly' ? 'button-selected' : ''}`} onClick={props.setWeekly}>7 DAYS</div>
          <div className={`centralizer  line-chart-button m-l-20 ${props.chartShow==='monthly' ? 'button-selected' : ''}`} onClick={props.setMonthly}>30 DAYS</div>
        </div>
        <div className='centralizer roboto-bold v-padding-small'>DAILY CASES TREND</div>
        <Line          
          data={chartData(numbers.reverse(),dates.reverse())} 
          options={options(verticalTicks(numbers),days)} />
      </div>
    </div>
  )
}


export default LineChart;