import React from 'react'
import styled from 'styled-components'
import GithubCorner from './GithubCorner'

const Container = styled.div(({ height }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  height: `${height || 200}px`,
  backgroundImage: `url(//cdn.rawgit.com/dabbott/react-native-express/master/static/background-compressed.jpg)`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '-1',
  flexDirection: 'column',
}))

export default ({ children, height }) => (
  <Container height={height}>
    <GithubCorner />
    {children}
  </Container>
)
