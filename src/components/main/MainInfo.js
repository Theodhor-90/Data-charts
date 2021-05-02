import MainCard from './MainCard';
import TrendingUp from './../icons/TrendingUp';
import TrendingDown from './../icons/TrendingDown';
import Calendar from './../icons/Calendar';
import Danger from './../icons/Danger';
import classAssigner from './../../js/classAssigner'

function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const MainInfo = (props) => {
   const classNames = classAssigner(props.data);

    return(
      <div className='flex column  flex-wrapper  around third-container fw-mobile'>

        <MainCard
          dataIcon={props.data.increase > 0 ? TrendingUp : TrendingDown}
          dataNumber={`${props.data.increase}%`}
          dataText={'Increase from previous day'}
          backGround={classNames.trending}
        />
        <MainCard
          dataIcon={Danger}
          dataNumber={formatNumber(props.data.dailyCases)}
          dataText={'New cases from Yesterday'}
          backGround={classNames.weeklyAvarage}
        />
        <MainCard
          dataIcon={Calendar}
          dataNumber={formatNumber(props.data.weeklyCasesAvarage)}
          dataText={'Last 7 days avarage'}
          backGround={'back-normal'}
        />
      </div>
    )
}

export default MainInfo;