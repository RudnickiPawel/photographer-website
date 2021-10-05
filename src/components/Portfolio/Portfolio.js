import '../../main.css';
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Portfolio = () => {
  const imagesNature = importAll(require.context('../../assets/nature', false, /\.(png|jpe?g|svg)$/));
  const imagesFood = importAll(require.context('../../assets/food', false, /\.(png|jpe?g|svg)$/));
  const imagesPeople = importAll(require.context('../../assets/people', false, /\.(png|jpe?g|svg)$/));
  const imagesArchitecture = importAll(require.context('../../assets/architecture', false, /\.(png|jpe?g|svg)$/));
  const [state, setstate] = useState(imagesNature);

  const changeCategory = (target, currentImages) => {
    let categories = document.querySelectorAll('.Portfolio__category');
    categories = [...categories];
    categories.map(category => {
      category.classList.remove('cat-active');
      return null;
    })
    setstate(currentImages);
    target.classList.add('cat-active');
  }

  return (
    <div className='Portfolio'>
      <div className="Portfolio__title">Portfolio</div>
      <div className="Portfolio__categories">
        <div className="Portfolio__category" onClick={(e) => { changeCategory(e.target, imagesNature) }}>nature</div>
        <div className="Portfolio__category" onClick={(e) => { changeCategory(e.target, imagesPeople) }}>people</div>
        <div className="Portfolio__category" onClick={(e) => { changeCategory(e.target, imagesFood) }}>food</div>
        <div className="Portfolio__category" onClick={(e) => { changeCategory(e.target, imagesArchitecture) }}>architecture</div>
      </div>
      <Carousel showThumbs={false} centerMode={true} centerSlidePercentage={100} infiniteLoop={true} useKeyboardArrows={true} emulateTouch={true} onClickItem={(index, item)=>{
        
      }}>
        {Object.keys(state).map((key, index) => {
          return <div key={key}><img className='Portfolio__image' src={state[key].default} alt='' /></div>
        })}
      </Carousel>
    </div>
  );

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return null; });
    return images;
  }
}

export default Portfolio;