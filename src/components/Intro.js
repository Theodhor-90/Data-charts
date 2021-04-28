
import wales from './../assets/maps/wales.svg';
import england from './../assets/maps/england.png';
import scotland from './../assets/maps/scotland.png';
import ireland from './../assets/maps/ireland.png';
import uk from './../assets/maps/uk.png';


const Intro = (props) => {
    let country, map = null;
    if(props.country==='uk'){
        country = 'United Kingdom';
        map = uk;
    } else if(props.country==='england'){
        country='England';
        map = england;
    } else if(props.country==='scotland'){
        country='Scotland';
        map = scotland;
    } else if(props.country==='wales'){
        country='Wales';
        map = wales;
    } else {
        country='Northern Ireland';
        map = ireland;
    }

    return(
        <div className='intro'>
            <div>
                 Latest updates for <span className='roboto-bold p-h-10'>{country}</span>
            </div>
            <img className='map' src={map} alt='norhing' />
        </div>
        
    )
}

export default Intro;