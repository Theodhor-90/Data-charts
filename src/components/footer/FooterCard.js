

const FooterCard = (props) => {
    return(
        <div className='flex column around footer-element p-25'>
            <div className='centralizer roboto-condensed-bold size-25 v-padding-small'>{props.title}</div>
            <div className='flex around back-normal'>
                <div className='centralizer footer-left padding-small'>
                    <img className='icon p-10 footer' src={props.icon} alt='nothing' /> 
                </div>
                <div className='p-10 roboto-condensed-light footer-right padding-small text-center'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default FooterCard;