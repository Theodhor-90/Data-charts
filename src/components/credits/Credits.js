
const Credits = () =>{
    return(
        <div className='flex column-mobile between  p-10 color-white back-black'>
            <div className='flex p-10 fw-mobile center-mobile  roboto condensed '>
                Data sourced from the <span className='roboto-condensed-bold p-h-10'>
                    <a href='https://api.coronavirus.data.gov.uk' target='#'>
                    GOV.UK Covid-19 API</a></span>
            </div>
            <div className='flex p-10 fw-mobile center-mobile roboto-condensed'>
                Desinged and developed by <span className='roboto-condensed-bold p-h-10'>Theodhor Shyti</span>
            </div>           
        </div>
    )
}

export default Credits;