import React from 'react'
import { Helmet } from 'react-helmet'

import { HomeTemplate } from '../components/templates'

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomeTemplate />
    </>
  )
}
