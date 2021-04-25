const Intro = (props) => {
    let country = props.country === 'uk' ? 'United Kingdom' :
        props.country === 'england' ? 'England' :
        props.country === 'scotland' ? 'Scotland' :
        props.country === 'wales' ? 'Wales' : 'Northern Ireland';
    return(
        <div className='intro'>
            Latest updates for <span className='roboto-bold p-h-10'>{country}</span>
        </div>
    )
}

export default Intro;