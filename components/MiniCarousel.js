import Slider from "react-slick";
import Image from 'next/image'
import "../node_modules/slick-carousel/slick/slick-theme.css"
import "../node_modules/slick-carousel/slick/slick.css"
import styles from '../styles/Minicarousel.module.scss'

const MiniCarousel = ({ slide1, slide2, slide3}) => {
  const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  autoPlaySpeed: 4000
  };

  return (
      <Slider {...settings}>
        <div className={styles['carousel--mini__slide']}>
          <Image src={slide1} width={1000} height={540} alt="Project" className={ styles['carousel--mini__slide__image']} />
          </div>
        <div className={styles['carousel--mini__slide']}>
            <Image src={ slide2 } width={1000} height={ 540 } alt="Project" className={ styles['carousel--mini__slide__image']} />
          </div>
        <div className={styles['carousel--mini__slide']}>
            <Image src={ slide3 } width={1000} height={ 540 } alt="Project" className={ styles['carousel--mini__slide__image']} />
          </div>
      </Slider>
  )
}

export default MiniCarousel
