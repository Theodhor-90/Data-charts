
const MainCard = (props) => {

    return(
        <div className={`info-container flex around ${props.backGround}`}>
            <div className='centralizer'>
                <props.dataIcon />
            </div>
            <div className='flex column around'>
                <div className='roboto-bold p-10'>{props.dataNumber}</div>
                <div>{props.dataText}</div>
            </div>

        </div>
    )
}

export default MainCard;