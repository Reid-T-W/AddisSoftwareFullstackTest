import React from 'react'
import Search from '../../components/ui/Search'
import emotionStyled from '@emotion/styled';

const ScrollableBox = emotionStyled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 3;
`;

const Albums = () => {
  return (
    <>
      {/* <h3>Albums</h3> */}
      <Search placeholder={"Search Albums"}/>
      <ScrollableBox>
        {/* <ArtistsView /> */}
      </ScrollableBox>
      {/* <AlbumsView /> */}
    </>
  )
}

export default Albums