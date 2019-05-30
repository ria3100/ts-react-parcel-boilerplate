import React from 'react'
import { Helmet } from 'react-helmet'

import { SignupTemplate } from '../components/templates'

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SignupTemplate />
    </>
  )
}
