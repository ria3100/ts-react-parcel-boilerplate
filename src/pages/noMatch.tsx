import React from 'react'
import { Helmet } from 'react-helmet'

import { NoMatchTemplate } from '../components/templates'

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NoMatchTemplate />
    </>
  )
}
