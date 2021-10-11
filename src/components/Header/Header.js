import '../../main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import backgroundIMG from '../../assets/background.jpg'; 

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo">Paweł Rudnicki</div>
      <Menu />
      <Hamburger />
      <img className='Header__background' src={backgroundIMG} alt="" />
    </header>
  );
}

export default Header;