
const MainCard = (props) => {

    return(
        <div className={`info-container fw-mobile flex around ${props.backGround}`}>
            <div className='centralizer'>
                <props.dataIcon />
            </div>
            <div className='flex column around'>
                <div className='roboto-bold p-10'>{props.dataNumber}</div>
                <div className='roboto-condensed text-center f-s-12-mobile'>{props.dataText}</div>
            </div>

        </div>
    )
}

export default MainCard;