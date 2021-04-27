import { Doughnut } from 'react-chartjs-2';
import TrendingUp from './../icons/TrendingUp';
import TrendingDown from './../icons/TrendingDown';
import Calendar from './../icons/Calendar';
import Danger from './../icons/Danger';
import mathBox from './../../js/avarage';
import Info from './Info';
import classAssigner from './../../js/classAssigner'

function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Overview = (props) => {
   const results = mathBox(props.england,'england');
   const classNames = classAssigner(results);

    return(
      <div className='flex fw around p-10'>
        <Info 
          dataIcon={results.trending > 0 ? TrendingUp : TrendingDown}
          dataNumber={`${results.trending}%`}
          dataText={'Increase from previous day'}
          backGround={classNames.trending}
        />
        <Info 
          dataIcon={Danger}
          dataNumber={formatNumber(results.cases)}
          dataText={'New cases from Yesterday'}
          backGround={classNames.weeklyAvarage}
        />
        <Info 
          dataIcon={Calendar}
          dataNumber={formatNumber(results.weeklyAvarage)}
          dataText={results.weeklyText}
          backGround={'back-normal'}
        />
      </div>
    )
}

export default Overview;