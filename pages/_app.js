import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" transition={{duration: 0.5}} variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    }}>
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </motion.div>
  )
}

export default MyApp