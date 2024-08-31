import React from 'react'
import styled from '@emotion/styled';
import { 
    SONGS_ROUTE,
    ARTISTS_ROUTE,
    ALBUMS_ROUTE,
    GENRES_ROUTE
} from '../../../utils/constants';

const HorizontalMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MenuItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid #ccc;

  &:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
  }

  &:hover {
  color: orange;
}
`;

const HorizontalMenu = () => {
  return (
    <HorizontalMenuContainer>

        <MenuItem href={SONGS_ROUTE}>
            <h3>Songs</h3>
        </MenuItem>
        <MenuItem href={ARTISTS_ROUTE}>
            <h3>Artists</h3>
        </MenuItem>
        <MenuItem href={ALBUMS_ROUTE}>
            <h3>Albums</h3>
        </MenuItem>
        <MenuItem href={GENRES_ROUTE}>
            <h3>Genres</h3>
        </MenuItem>
    </HorizontalMenuContainer>
  )
}

export default HorizontalMenu