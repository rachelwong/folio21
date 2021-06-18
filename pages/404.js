    <div className={styles['post-wrapper']}>
      <div className={styles['post-banner']}>
        <Slider {...settings} className={['post-banner-slider']}>
          <div className={styles['post-slide1']} id="slide1"></div>
          <div className={styles['post-slide2']} id="slide2"></div>
          <div className={styles['post-slide3']} id="slide3"></div>
        </Slider>
        <div className={styles['post-banner__content']}>
          <h3 className={styles['post-banner__title']}>Thoughts & Writings</h3>
          <p className={ styles['post-banner__blurb']}>A mish-mash collection of learning notes and project post-mortems.</p>
        </div>
      </div>
      <div className={styles['post-container']}>
        <div className={ styles['post-container__inner']}>
          {posts.length > 0 && posts.map((post, postIndex) => (
            <PostEntry post={post} key={ postIndex} />
          ))}
        </div>
      </div>
    </div>
