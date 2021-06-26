import styles from "../styles/Piano.module.scss";
import { motion } from 'framer-motion'
import aKey from '../public/notes/a.mp3'
import useSound from 'use-sound'
import afKey from '../public/notes/af.mp3'
import bKey from '../public/notes/b.mp3'
import bfKey from '../public/notes/bf.mp3'
import cKey from '../public/notes/c.mp3'
import dKey from '../public/notes/d.mp3'
import dfKey from '../public/notes/df.mp3'
import eKey from '../public/notes/e.mp3'
import efKey from '../public/notes/ef.mp3'
import fKey from '../public/notes/f.mp3'
import gKey from '../public/notes/g.mp3'
import gfKey from '../public/notes/gf.mp3'

const Piano = () => {

  const [playA] = useSound(aKey)
  const [playAf] = useSound(afKey)
  const [playB] = useSound(bKey)
  const [playBf] = useSound(bfKey)
  const [playC] = useSound(cKey)
  const [playD] = useSound(dKey)
  const [playDf] = useSound(dfKey)
  const [playE] = useSound(eKey)
  const [playEf] = useSound(efKey)
  const [playF] = useSound(fKey)
  const [playG] = useSound(gKey)
  const [playGf] = useSound(gfKey)

  return (
    <motion.div className={styles.piano}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -25 }}
      transition={{
        delay: .4,
        duration: .3,
        ease: 'easeIn'
      }}
    >
      <div className={styles.piano__inner}>
        <div className={styles['piano-screen']}>
          <div className={styles.piano__screen__glare}></div>
          <ul className={styles.piano__screen__beats}>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
          </ul>
          <ul className={styles.piano__screen__quavers}>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
            <li className={`${styles.beat} ${styles.odd}`}></li>
          </ul>
          <ul className={styles.piano__screen__minims}>
            <li className={`${styles.beat} ${styles.odd}`}></li>
            <li className={`${styles.beat} ${styles.even}`}></li>
          </ul>
        </div>
        <div className={styles['piano-keys__wrapper']}>
          <ul className={styles['piano-keys']}>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['c-nat']}`} onClick={ playC}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['d-sharp']}`} onClick={ playDf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['d-nat']}`} onClick={ playD }></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['e-sharp']}`} onClick={ playEf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['e-nat']}`} onClick={ playE}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['f-nat']}`} onClick={ playF}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['f-sharp']}`} onClick={ playGf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['g-nat']}`} onClick={playG}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['g-sharp']}`} onClick={ playAf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['a-nat']}`} onClick={ playA}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['a-sharp']}`} onClick={ playBf}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['b-nat']}`} onClick={ playB}></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Piano
