import React from 'react'
import { css } from '@emotion/core'

import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

export default () => {
  return (
    <Footer id="footer" css={style}>
      <Container>
        <Content>
          <Columns>
            <Column>
              <p>
                Made with
                <Icon hasTextColor="danger" className="fa fa-heart" />
                by <a>Algus Dark</a>
              </p>
            </Column>
          </Columns>
          <Content isSize="small">
            <p>
              The source code is licensed under <a target="_blank">MIT</a>.
            </p>
            <p>
              The website content is licensed under{' '}
              <a target="_blank">CC ANS 4.0</a>.
            </p>
          </Content>
        </Content>
      </Container>
    </Footer>
  )
}

const style = css({
  background: '#333',
})
