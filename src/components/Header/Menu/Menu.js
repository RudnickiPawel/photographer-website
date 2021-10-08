import '../../../main.css';

const Menu = () => {
  return (
    <div className="Menu Menu--hidden">
      <a href='#portfolio-cats' className="Menu__link">Portfolio</a>
      <div className="Menu__link">About</div>
      <div className="Menu__link">Contact</div>
    </div>
  );
}

export default Menu;