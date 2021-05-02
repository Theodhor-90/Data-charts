import { dateFormatter } from '../../js/dateFormatter';

const Title = (props) => {
    let country = null;
    if(props.country==='uk'){
        country = 'United Kingdom';
    } else if(props.country==='england'){
        country='England';
    } else if(props.country==='scotland'){
        country='Scotland';
    } else if(props.country==='wales'){
        country='Wales';
    } else {
        country='Northern Ireland';
    }
    const date = dateFormatter(props.date)

    return(
        <div className='centralizer column fw p-25'>
            <div>
                 Latest updates for <span className='roboto-bold p-h-10'>{country}</span>
            </div>
            <div className='p-10 roboto-condensed-bold'>
                {date}
            </div>
        </div>
        
    )
}

export default Title;