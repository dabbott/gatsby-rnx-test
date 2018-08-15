import styled from 'styled-components'

export default styled.div(({ paddingTop }) => ({
  flex: '1 1 auto',
  paddingTop: `${paddingTop || 200}px`,
  overflowY: 'auto',
  zIndex: 1,
  minWidth: '0',
  minHeight: '0',
}))
