import styles from "../styles/Piano.module.scss";
import { motion } from 'framer-motion'
const Piano = () => {
  return (
    <motion.div className={styles.piano}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2,
        duration: 1.5,
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
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['c-nat']}`}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['d-sharp']}`}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['d-nat']}`}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['e-sharp']}`}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['e-nat']}`}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['f-nat']}`}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['f-sharp']}`}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['g-nat']}`}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['g-sharp']}`}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['a-nat']}`}></li>
            <li className={`${styles['piano-key']} ${styles.sharp} ${styles['a-sharp']}`}></li>
            <li className={`${styles['piano-key']} ${styles.natural} ${styles['b-nat']}`}></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Piano
