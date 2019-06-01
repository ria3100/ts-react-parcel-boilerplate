/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Content, Section, Container } from 'bloomer'
import { NoMatchMain, Footer, Navigation } from '../organisms'

export default () => {
  return (
    <Fragment>
      <Navigation />
      <Content>
        <Section>
          <Container>
            <NoMatchMain />
          </Container>
        </Section>
      </Content>
      <Footer />
    </Fragment>
  )
}
