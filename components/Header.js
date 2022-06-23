import React from 'react'
import Head from 'next/head'

const Header = ({ title }) => {
  return (
    <>
        <Head>
          <title>{ title } | Rachel Wong front end developer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Front end Portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta property="og:image" content="/social_screen.png"></meta>
          <meta name="description" content="Rachel Wong's online portfolio for front end development" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Rachel Wong | Front end developer" />
          <meta name="og:description" property="og:description" content="" />
          <meta property="og:site_name" content="Rachel Wong | Front end developer" />
          <meta property="og:url" content="http://www.rachelwong.dev" />
          <meta property="twitter:title" content={`${title} | Rachel Wong Front end developer Brisbane`}></meta>
          <meta property="og:title" content={`${title} | Rachel Wong, Front end developer Brisbane`}></meta>
      </Head>
    </>
  )
}

export default Header
