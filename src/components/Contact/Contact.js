import '../../main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div id='Contact' className='Contact'>
      <div className="Contact__title">Contact</div>
      <div className="Contact__container">
        <a href='tel:+48512386720' className="Contact__link"><FontAwesomeIcon className="Contact__icon" icon={faPhoneAlt} />phone</a>
        <a href='mailto:rudnicki.pawel94@yahoo.com' className="Contact__link"><FontAwesomeIcon className="Contact__icon" icon={faEnvelope} />email</a>
        <a href='https://instagram.com' className="Contact__link"><FontAwesomeIcon className="Contact__icon" icon={faInstagram} />instagram</a>
        <a href='https://facebook.com' className="Contact__link"><FontAwesomeIcon className="Contact__icon" icon={faFacebook} />facebook</a>
        <a href='https://twitter.com' className="Contact__link"><FontAwesomeIcon className="Contact__icon" icon={faTwitter} />twitter</a>
      </div>
    </div>
  )
}

export default Contact;