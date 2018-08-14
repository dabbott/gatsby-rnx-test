import styled from 'styled-components'

export default styled.div(({ height }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  height: `${height || 400}px`,
  backgroundImage: `url(//cdn.rawgit.com/dabbott/react-native-express/master/static/background-compressed.jpg)`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '-1',
  flexDirection: 'column',
}))
