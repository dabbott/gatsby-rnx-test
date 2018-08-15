import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import mediaQuery from '../utils/mediaQuery'

import Page from './Page'
import HideAt from './HideAt'
import Sidebar from './Sidebar'
import PageHeader from './PageHeader'
import NavigatorButton from './NavigatorButton'
import {
  getSection,
  getNextSection,
  getPreviousSection,
} from '../utils/Sections'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minWidth: '0',
  minHeight: '0',
})

const Inner = styled.div({
  flex: '1 1 auto',
  flexDirection: 'row',
  alignItems: 'stretch',
  display: 'flex',
  minWidth: '0',
  minHeight: '0',
})

const Content = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  position: 'relative',
  minWidth: '0',
  minHeight: '0',
  overflowY: 'scroll',
})

const SidebarContainer = styled.div({
  flex: '0 0 280px',
  borderRight: '1px solid rgba(220,220,220,0.5)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minWidth: '0',
  minHeight: '0',
})

const NavigatorButtonContainer = styled.div({
  padding: '0 60px 40px 60px',
  [mediaQuery.small]: {
    padding: '10px 0',
  },
})

const showSidebar = true

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
          <Container>
            <Inner>
              {/* {this.renderMenuButton(styles)} */}
              <HideAt
                style={{
                  flex: '0 0 280px',
                  overflowY: 'auto',
                }}
                breakpoint="small"
              >
                {showSidebar && (
                  <SidebarContainer>
                    <Sidebar currentSection={section} />
                  </SidebarContainer>
                )}
              </HideAt>
              <Content>
                <Page title={title} footer={footer}>
                  <PageHeader
                    title={title}
                    author={author.name || '@dvnabbott'}
                    authorURL={author.url || 'https://twitter.com/dvnabbott'}
                  />
                  {children}
                </Page>
              </Content>
            </Inner>
            {/* {responsive.match("small|mobile") &&
              showMenu &&
              <Sidebar
                style={styles.menu}
                currentSection={section}
                centered={true}
              />} */}
          </Container>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
