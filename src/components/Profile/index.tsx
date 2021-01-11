import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description }
    }
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </S.Wrapper>
  );
};

export default Profile;
