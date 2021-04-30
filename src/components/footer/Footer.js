import FooterCard from './FooterCard';
import footerArray from '../../js/footerArray';

const Footer = () => {
    return(
        <div className='flex around p-25'>
            {footerArray.map(el =>
                <FooterCard key={el.icon} icon={el.icon} text={el.text} title={el.title}/>    
            )}
        </div>
    )
}

export default Footer;