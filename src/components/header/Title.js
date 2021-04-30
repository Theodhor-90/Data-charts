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

    return(
        <div className='centralizer fw p-25'>
            <div>
                 Latest updates for <span className='roboto-bold p-h-10'>{country}</span>
            </div>
        </div>
        
    )
}

export default Title;