import { Line } from 'react-chartjs-2';
import { chartData, options} from '../../js/chartData';


const LineChart = (props) => {

    const numbers = [], dates = [];

    props.weeklyCases.forEach(element => {
        numbers.push(element.cases);
        dates.push(element.date);
    });

  return(
    <div className='centralizer fw'>
        <div className='fw'>
          <Line 
          data={chartData(numbers,dates)} 
          options={options}/>
        </div>
    </div>
  )
}      

export default LineChart;