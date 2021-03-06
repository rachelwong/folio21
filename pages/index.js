import Head from 'next/head'
import Carousel from '../components/Carousel'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'contentful'
import Shot from '../components/Shot'
import styles from '../styles/Home.module.scss'
import Plus from '../public/plus-solid.svg'
import MiniCarousel from '../components/MiniCarousel'
import { motion } from 'framer-motion';
import "../node_modules/slick-carousel/slick/slick-theme.css"
import "../node_modules/slick-carousel/slick/slick.css"
import Project1Image1 from '../public/Preloved1.png'
import Project1Image2 from '../public/Preloved2.png'
import Project1Image3 from '../public/Preloved3.png'
import Project2Image1 from '../public/Linkedout1.png'
import Project2Image2 from '../public/Linkedout2.png'
import Project2Image3 from '../public/Linkedout3.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Braces from '../public/braces.svg'
import Arrow from '../public/arrow.svg'
import Star from '../public/star.svg'
import Circle from '../public/circle.svg'
import Funct from '../public/funct.svg'
import Hex from '../public/hex.svg'
import Piano from '../components/Piano'
import HTML5Logo from '../public/html_logo.svg'
import CSS3Logo from '../public/css3_logo.svg'
import SassLogo from '../public/sass_logo.svg'
import ReactLogo from '../public/react_logo.svg'
import JavascriptLogo from '../public/js_logo.svg'
import GithubLogo from '../public/github_logo.svg'
import IllustratorLogo from '../public/illustrator_logo.svg'
import PhotoshopLogo from '../public/photoshop_logo.svg'
import MongodbLogo from '../public/mongodb_logo.svg'

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_CDN_API
  })
  const res = await client.getEntries({ content_type: 'shot' })

  return {
    props: {
      shots: res.items,
    },
    revalidate: 1
  }
}

export default function Home({ shots }) {

  const titleLine1 = "Hello I'm Rachel."
  const titleLine2 = "I am a front-end developer from Brisbane."
  const titleLine3 = "I enjoy building interfaces & learning new tech."

  // variants for framer motion
  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      transition: {
        opacity: 1,
        delay: .18,
        staggerChildren: 0.05
      }
    }
  }

  const letter = {
      hidden: {
        opacity: 0,
        // y: 100
      },
      visible: {
        // y: 0,
        opacity: 1,
      }
  }
  if (!shots.length) return ""
  return (
    <div className={styles.container}>
      <Head>
        <title>Rachel Wong Front end developer</title>
        <meta name="description" content="Front end developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles['home-header']}>
        <motion.div className={styles['home-header__graphic']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.5 }}>
          <motion.div className={`${styles['home__header__braces1']} ${styles['home-header__svgs']}`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.6,
            }}
            transition={{
              duration: 2,
              delay: 0.5
            }} >
            <Image src={Braces} width={300} height={ 300} alt="" aria-hidden={true} />
          </motion.div>
          <motion.div
            className={`${styles['home__header__star1']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Hex} width={300} height={300} alt="" aria-hidden={ true} />
          </motion.div>
          <motion.div className={`${styles['home__header__hex2']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1.3, delay: 1.5}}
          >
            <Image src={Hex} width={300} height={300} alt="" aria-hidden={ true } />
          </motion.div>
          <motion.div className={`${styles['home__header__circle1']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .5 }}
            transition={{duration: 1.3, delay: 1.5}}
          >
            <Image src={Circle} width={300} height={300} alt="" aria-hidden={ true }/>
          </motion.div>
          <motion.div className={`${styles['home__header__circle2']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1.3  , delay: 1.3}}
          >
            <Image src={Circle} width={300} height={300} alt="" aria-hidden={ true }/>
          </motion.div>
          <motion.div className={`${styles['home__header__circle3']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .8 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Circle} width={300} height={300} alt="" aria-hidden={ true }/>
          </motion.div>
          <motion.div className={`${styles['home__header__funct1']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .3 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Funct} width={10} height={10} alt="" aria-hidden={ true }/>
          </motion.div>
          <motion.div className={`${styles['home__header__arrow1']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .3 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Arrow} width={300} height={300} alt="" aria-hidden={ true }/>
          </motion.div>
          <motion.div
            className={`${styles['home__header__circle4']} ${styles['home-header__svgs']}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: .85 }}
            transition={{duration: 1.5, delay: 1}}
          >
            <Image src={Circle} width={30} height={30} alt="" aria-hidden={ true} />
          </motion.div>
        </motion.div>
        <div className={styles['home-header__wrapper']}>
          <div className={styles['home-header__text']}>
            <div className={ styles['home-header__text-wrapper']}>
              <div className={styles['home-header__text__line']}>
                <motion.div>
                  <motion.div className={styles['home-header__text__line-inner']}
                    initial="hidden"
                    animate="visible"
                    variants={sentence}>
                    {titleLine1.split("").map((char, index) => {
                      return (
                        <motion.span key={char + "-" + index} variants={letter}>{ char }</motion.span>
                      )
                    })}
                  </motion.div>
                  <div className={styles['home-header__text__mask']}>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: .5}} className={styles['home-header__text__line--smaller']}>
                      { titleLine2}
                    </motion.div>
                  </div>
                  <div className={styles['home-header__text__mask']}>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1}} className={styles['home-header__text__line--blurb']}>
                    { titleLine3 }
                    </motion.div>
                  </div>
                  <div className={styles['home-header__text__mask--btn']}>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.5}} className={styles['home-header__text__line--blurb']}>
                      <Link href="/RachelWong_CV.pdf" target="_blank">
                        <a href="/RachelWong_CV.pdf" target="_blank" className={styles['home-header__text__btn']} >
                          Download CV
                        </a></Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className={styles['home-header__visuals']}>
            <Piano />
          </div>
        </div>
        <Carousel />
      </div>

        <Container className={styles.projects}>
        <Row className={styles['projects-description']}>
          <h3 id="#projects">Projects</h3>
        </Row>

<Row className={`${styles['project-row']} ${styles['project-row--even']}`}>
          <Col lg={6}>
            <div className={styles['project-textwrapper__inner']}>
              <h3 className={styles['project__title'] }>LinkedOut</h3>
              <ul className={styles['project-tags']}>
                <li>
                  <span className={styles['project-tags__plus']}>
                    <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true } />
                  </span>
                  <span>MongoDB</span></li>
                <li>
                  <span className={styles['project-tags__plus']}>
                    <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true }/>
                  </span>
                  <span>Express</span></li>
                <li>
                  <span className={styles['project-tags__plus']}>
                    <Image src={Plus} width={10} height={10} alt={"Techstack"}  aria-hidden={ true }/>
                  </span>
                  <span>React</span>
                </li>
                <li>
                  <span className={styles['project-tags__plus']}>
                    <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true }/>
                  </span>
                  <span>Node</span>
                </li>
                <li>
                  <span className={styles['project-tags__plus']}>
                    <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true }/>
                  </span>
                  <span>Bulma</span>
                </li>
              </ul>

              <p className={ styles['project__summary'] }>LinkedOut is a full-stack MERN app where coding bootcamp graduates can list their profiles publicly for prospective employers and business clients to view and connect with for work opportunities. Completed as a group project.</p>
            <div className={styles['project-actions']}>
                <Link href="/">
                  <a target="_blank" href="https://github.com/rachelwong/linkedout-mern-client" className={styles['project-actions__repolink']} rel="noopener noreferrer"> <span>See Source Code</span></a></Link>
                <Link href="/">
                  <a target="_blank" href="https://linkedout.netlify.com/" className={styles['project-actions__livelink']} rel="noopener noreferrer">Go Live</a></Link>
              </div>
              </div>
          </Col>

          <Col lg={ 6} className={styles['project-imagewrapper']}>
            <MiniCarousel slide1={Project2Image1} slide2={Project2Image2} slide3={Project2Image3} />
          </Col>

        </Row>

        <Row className={`${styles['project-row']} ${styles['project-row--odd']}`}>
          <Col lg={ 6} className={styles['project-imagewrapper']}>
            <MiniCarousel slide1={Project1Image1} slide2={Project1Image2} slide3={Project1Image3} />
          </Col>
          <Col lg={6}>
            <div className={styles['project-textwrapper__inner']}>
              <h3 className={styles['project__title'] }>Preloved</h3>
              <ul className={styles['project-tags']}>
                <li>
                <span className={styles['project-tags__plus']}>
                    <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true } />
                </span>
                <span>Ruby</span></li>
                <li>              <span className={styles['project-tags__plus']}>
                  <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true }/>
                </span>
                <span>Rails</span></li>
                <li>              <span className={styles['project-tags__plus']}>
                  <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true }/>
                </span>
                <span>Gems</span></li>
                <li>              <span className={styles['project-tags__plus']}>
                  <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true }/>
                </span>
                  <span>Bootstrap</span>
                </li>
                <li>
                  <span className={styles['project-tags__plus']}>
                  <Image src={Plus} width={10} height={10} alt={"Techstack"} aria-hidden={ true }/>
                </span>
                  <span>HTML5/CSS3</span>
                </li>
              </ul>

              <p className={ styles['project__summary']}>A full-stack ruby-on-rails application that allows private owners of second hand musical instruments to list at compassionate prices for Queensland schools to purchase for their students.</p>
            <div className={styles['project-actions']}>
                <Link href="/">
                  <a target="_blank" href="https://github.com/rachelwong/music" className={styles['project-actions__repolink']} ref="noopener noreferrer"> <span>See Source Code</span></a></Link>
                <Link href="/">
                  <a target="_blank" href="https://secret-mountain-45294.herokuapp.com/" rel="noopener noreferrer" className={styles['project-actions__livelink']}>Go Live</a></Link>
              </div>
              </div>
          </Col>
        </Row>


      </Container>

      <div className={styles['shots-container']}>
        <div className={styles['shots-summary']}>
          <h3>Practice Shots</h3>
          <p>I learn by making incremental steps, these are some of my smaller projects to help me build a solid foundation understanding of code flow, fundamental concepts and problem solving. </p>
        </div>
        <div className={styles['shots-wrapper']}>
          {shots.length > 0 && shots.map((shot, shotIndex) => (
            <Shot shot={shot} key={ shotIndex}/>
          ))}
        </div>
      </div>

      <div className={styles['about-container']}>
        <div className={styles['about-summary']}>
          <h3>About me</h3>
          <p>I am a front-end developer based in Brisbane. I have five years of public service experience serving two Queensland State government departments at various capacities before changing careers in 2018. I have extensive experience in public administration, data analytics, Sharepoint development. In a previous life, I also did freelance illustration using the Adobe Creative Suite. </p>
          <p>I derive much personal satisfaction from being able to translate a static design into a live, fully functioning product. </p>
         <p>I am a visual and interpersonal learner. I absorb, digest and retain knowledge from my peers and from rolling my sleeves up to work.</p>
        </div>
        <ul className={styles['about-language-wrapper']}>
          <li>
            <Image src={HTML5Logo} width={80} height={80 } alt="HTML5" />
          </li>
          <li>
            <Image src={CSS3Logo} width={80} height={80 }  alt="CSS3" />
          </li>
          <li>
            <Image src={JavascriptLogo} width={80} height={80 }  alt="Javascript" />
          </li>
          <li>
            <Image src={SassLogo} width={80} height={80 } alt="Sass" />
          </li>
          <li>
            <Image src={ReactLogo} width={80} height={80 } alt="React" />
          </li>
          <li>
            <Image src={GithubLogo} width={80} height={80 } alt="Github" />
          </li>
          <li>
            <Image src={MongodbLogo} width={80} height={80 } alt="Mongo db" />
          </li>
          <li>
            <Image src={PhotoshopLogo} width={80} height={80 } alt="Photoshop" />
          </li>
          <li>
            <Image src={IllustratorLogo} width={80} height={80 }  alt="Illustrator" />
          </li>

        </ul>
      </div>

    </div>
  )
}
