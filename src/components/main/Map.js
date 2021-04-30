
import wales from '../../assets/maps/wales.svg';
import england from '../../assets/maps/england.png';
import scotland from '../../assets/maps/scotland.png';
import ireland from '../../assets/maps/ireland.png';
import uk from '../../assets/maps/uk.png';


const Map = (props) => {
    let  map = null;
    if(props.country==='uk'){
        map = uk;
    } else if(props.country==='england'){
        map = england;
    } else if(props.country==='scotland'){
        map = scotland;
    } else if(props.country==='wales'){
        map = wales;
    } else {
        map = ireland;
    }

    return(
        <div className='centralizer third-container'>
            <img className='map' src={map} alt='norhing' />
        </div>
        
    )
}

export default Map;