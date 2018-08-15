import React, { Component } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Content from './Content'
import Title from './Title'
import Subtitle from './Subtitle'
import ShowAt from './ShowAt'
import HideAt from './HideAt'
import MarkdownProvider from './MarkdownProvider'

const Container = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '0',
  minHeight: '0',
  outline: 'none',
})

const ContentContainer = styled.div({
  borderTop: '1px solid rgba(220,220,220,0.5)',
  backgroundColor: 'white',
  padding: '60px 60px 40px 60px',
})

const Mobile = styled.div({
  padding: '60px 20px 20px 20px',
  // overflowY: 'scroll',
})

const Logo = styled.img(({ image, image2x, width, height }) => ({
  paddingTop: '40px',
  src: image,
  srcSet: `${image} 1x, ${image2x || image} 2x`,
  width: `${width}px`,
  height: `${height}px`,
}))

export default class Page extends Component {
  render() {
    const {
      children,
      footer,
      title,
      subtitle,
      bannerHeight,
      logo,
      logoWidth,
      logoHeight,
    } = this.props

    return (
      <MarkdownProvider>
        <>
          <ShowAt breakpoint={'small'}>
            <Mobile>
              {children}
              {footer}
            </Mobile>
          </ShowAt>
          <HideAt breakpoint={'small'}>
            <Container tabIndex={'-1'}>
              <Banner height={bannerHeight}>
                <Title>{title}</Title>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {logo && (
                  <Logo
                    image={
                      'https://cdn.rawgit.com/dabbott/react-native-express/master/static/logo.png'
                    }
                    image2x={
                      'https://cdn.rawgit.com/dabbott/react-native-express/master/static/logo@2x.png'
                    }
                    width={logoWidth}
                    height={logoHeight}
                  />
                )}
              </Banner>
              <Content paddingTop={bannerHeight}>
                <ContentContainer>{children}</ContentContainer>
                {footer}
              </Content>
            </Container>
          </HideAt>
        </>
      </MarkdownProvider>
    )
  }
}
