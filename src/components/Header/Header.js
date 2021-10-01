import '../../main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo">Paweł Rudnicki</div>
      <Menu />
      <Hamburger />
    </header>
  );
}

export default Header;