import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "my-profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 10000, maxHeight: 10000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <S.Wrapper>
      <Img fluid={avatarImage.childImageSharp.fluid} />
    </S.Wrapper>
  );
};

export default Avatar;
