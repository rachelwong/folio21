import styles from '../styles/Carousel.module.scss'
import Slider from 'react-slick'
import "../node_modules/slick-carousel/slick/slick-theme.css"
import "../node_modules/slick-carousel/slick/slick.css"
import image1 from '../public/footer-image.png'
import image2 from '../public/main_image.png'
const Carousel = () => {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 850,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false, /* must have this for fade to work */
  };

  return (
    <>
      <Slider {...settings}>
        <div className={styles['carousel-slide1']} id="slide1"></div>
        <div className={styles['carousel-slide2']} id="slide2"></div>
        <div className={styles['carousel-slide3']} id="slide3"></div>
      </Slider>
    </>
  )
}

export default Carousel
