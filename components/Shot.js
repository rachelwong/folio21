import styles from '../styles/Shot.module.scss'

const Shot = ({ shot }) => {

  const { projectName, repoLink, description, tags } = shot.fields
  return (
      <div className={styles['shot-wrapper']}>
      <a href={repoLink} className={styles['shot-link']} rel="noreferrer" target="_blank">
        <div className={ styles['shot-link__content']}>
          <h4 className={ styles['shot-title']}>{projectName}</h4>
            <ul className={ styles['shot-tags']}>
              {tags.length > 0 && tags.map((tag, tagIndex) => (
                <li>{ tag }</li>
              ))}
            </ul>
          <p className={styles['shot-summary']}>{description}</p>
        </div>
      </a>
      </div>
  )
}

export default Shot
