/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Section, Container } from 'bloomer'
import { NoMatchMain, Footer, Navigation } from '../organisms'

export default () => {
  return (
    <Fragment>
      <Navigation />
      <Section>
        <Container>
          <NoMatchMain />
        </Container>
      </Section>
      <Footer />
    </Fragment>
  )
}
