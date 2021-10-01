import '../../../main.css';

const Hamburger = () => {
  const handleHamburgerClick = () => {
    // toggle menu on hamburger click
    const menu = document.getElementsByClassName("Menu")[0];
    menu.classList.toggle("Menu--hidden");
  };
  return (
    <div className='Hamburger' onClick={handleHamburgerClick}>
      <div className="Hamburger__line"></div>
      <div className="Hamburger__line"></div>
      <div className="Hamburger__line"></div>
    </div>
  )
};

export default Hamburger;