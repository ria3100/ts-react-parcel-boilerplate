import React from 'react'

import {
  Hero,
  HeroHeader,
  Nav,
  NavLeft,
  NavItem,
  NavCenter,
  NavRight,
  HeroBody,
  Title,
  Container,
  Icon,
} from 'bloomer'

export default () => {
  return (
    <Hero isColor="info" isSize="medium">
      <HeroHeader>
        <Nav>
          <NavLeft>
            <NavItem>Bloomer</NavItem>
          </NavLeft>
          <NavCenter>
            <NavItem>
              <Icon className="fa fa-github" />
            </NavItem>
            <NavItem>
              <Icon className="fa fa-twitter" />
            </NavItem>
          </NavCenter>
          <NavRight>
            <NavItem>Home</NavItem>
            <NavItem>Documentation</NavItem>
          </NavRight>
        </Nav>
      </HeroHeader>

      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>Title</Title>
        </Container>
      </HeroBody>
    </Hero>
  )
}
