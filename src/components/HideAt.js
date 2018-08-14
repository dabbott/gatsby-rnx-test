import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../utils/mediaQuery'

const HideAtLarge = styled.div({
  [mediaQuery.small]: {
    display: 'block',
  },
  [mediaQuery.medium]: {
    display: 'block',
  },
  [mediaQuery.large]: {
    display: 'none',
  },
})

const HideAtMedium = styled.div({
  [mediaQuery.small]: {
    display: 'block',
  },
  [mediaQuery.medium]: {
    display: 'none',
  },
  [mediaQuery.large]: {
    display: 'block',
  },
})

const HideAtSmall = styled.div({
  [mediaQuery.small]: {
    display: 'none',
  },
  [mediaQuery.medium]: {
    display: 'block',
  },
  [mediaQuery.large]: {
    display: 'block',
  },
})

export default function HideAt({ breakpoint, ...rest }) {
  switch (breakpoint) {
    case 'small':
      return <HideAtSmall {...rest} />
    case 'medium':
      return <HideAtMedium {...rest} />
    case 'large':
      return <HideAtLarge {...rest} />
    default:
      throw new Error('Invalid HideAt breakpoint')
  }
}
