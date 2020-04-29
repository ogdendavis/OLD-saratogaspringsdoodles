import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const DogImage = ({ file, alt = 'dogImage' }) => {
  const data = useStaticQuery(graphql`
    query imgQuery {
      images: allFile(filter: { extension: { in: ["jpg", "jpeg", "png"] } }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  if (!file) {
    return null;
  }
  const searchFor = file.slice(1);

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(searchFor);
  });

  return image ? (
    <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
  ) : null;
};

export default DogImage;
