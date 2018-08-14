import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import mediaQuery from '../utils/mediaQuery'

import Page from './Page'
import PageHeader from './PageHeader'
import NavigatorButton from './NavigatorButton'
import {
  getSection,
  getNextSection,
  getPreviousSection,
} from '../utils/Sections'

const NavigatorButtonContainer = styled.div({
  padding: '0 60px 40px 60px',
  [mediaQuery.small]: {
    padding: '10px 0',
  },
})

const Layout = props => {
  const { children } = props

  const slug = props['*']

  const section = getSection(slug)

  if (!section) return `Could not find page: ${slug}`

  const { author = {} } = section

  const title = section.fullTitle || section.title
  const nextSection = getNextSection(slug)
  const previousSection = getPreviousSection(slug)

  console.log('sections', nextSection, previousSection)

  // const { title } = section

  const footer = (
    <NavigatorButtonContainer>
      <NavigatorButton
        nextSection={nextSection}
        previousSection={previousSection}
      />
    </NavigatorButtonContainer>
  )

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            // title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Page title={title} footer={footer}>
            <PageHeader
              title={title}
              author={author.name || '@dvnabbott'}
              authorURL={author.url || 'https://twitter.com/dvnabbott'}
            />
            {children}
          </Page>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
