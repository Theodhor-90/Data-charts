
const Info = (props) => {

    return(
        <div className={`info-container flex around ${props.backGround}`}>
            <div className='centralizer'>
                <props.dataIcon />
            </div>
            <div className='flex column around'>
                <div>{props.dataNumber}</div>
                <div>{props.dataText}</div>
            </div>

        </div>
    )
}

export default Info;