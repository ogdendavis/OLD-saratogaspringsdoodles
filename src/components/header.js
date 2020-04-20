import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'

import dog1 from '../images/dog1.png'

const HeaderWrapper = styled.header`
  margin-bottom: 2em;
  position: relative;
  overflow: hidden;
  height: 60vh;
  display: flex;
  align-items: flex-end;
`

const HeaderInner = styled.div`
  color: teal;
  margin: 0 auto;
  width: 100%;
  max-width: 60em;
  padding: 1.5em;
  position: relative;
  z-index: 2;
  a {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  h1 a {
    color: white;
    text-decoration: none;
  }
`

const HeaderIcon = styled.img `
  max-height: 2em;
  margin-right: 1em;
`

const MainNav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  a {
    margin: 1em 1em 0;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.25em;
    color: orange;
    transition: all .5s ease;
    text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
  }
  a:hover {
    text-decoration: underline;
  }
`

const HeaderBg = styled(Img)`
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.5));
  }
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      background: file(relativePath: { eq: "puppy-on-grass.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark(sort: {
        order: ASC,
        fields: [frontmatter___order]
      }) {
        edges {
          node {
            frontmatter {
              menu
              slug
            }
          }
        }
      }
    }
  `)


  return (
    <HeaderWrapper>
      <HeaderInner>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
          >
            <HeaderIcon src={dog1} alt="Happy dog" />
            {siteTitle}
          </Link>
        </h1>
        <MainNav>
          {
            data.allMarkdownRemark.edges.map(({ node }) => (
              <Link to={node.frontmatter.slug}>
                {node.frontmatter.menu}
              </Link>
            ))
          }
        </MainNav>
      </HeaderInner>
      <HeaderBg
        fluid = {data.background.childImageSharp.fluid}
        style = {{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
