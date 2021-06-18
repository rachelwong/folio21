import styles from '../styles/Shot.module.scss'
import Image from 'next/image'
import Arrow from '../public/arrow-right-solid.svg'
import Cog from '../public/gear-six.svg'

const Shot = ({ shot }) => {

  const { projectName, repoLink, description, tags } = shot.fields
  return (
    <div className={styles['shot-wrapper']}>
      <div className={styles['shot-svg']} >
        <Image src={Cog} width={170} height={170} className={ styles['shot-gear__image']}/>
      </div>
        <a href={repoLink} className={styles['shot-link']} rel="noreferrer" target="_blank">
          <div className={ styles['shot-link__content']}>
          <h4 className={styles['shot-title']}>
            {projectName}
            <span className={styles['shot-title__arrow']}>
              <Image src={Arrow} width={18} height={18} className={ styles['shot-title__arrow-image']} />
            </span>
          </h4>
              <ul className={ styles['shot-tags']}>
                {tags.length > 0 && tags.map((tag, tagIndex) => (
                  <li key={ tagIndex }>{ tag }</li>
                ))}
              </ul>
            <p className={styles['shot-summary']}>{description}</p>
          </div>
        </a>
      </div>
  )
}

export default Shot
