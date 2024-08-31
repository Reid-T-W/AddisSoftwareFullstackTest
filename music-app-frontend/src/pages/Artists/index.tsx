import React from 'react'
import Search from '../../components/ui/Search'
import emotionStyled from '@emotion/styled';

const ScrollableBox = emotionStyled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 3;
`;

const Artists = () => {
  return (
    <>
    {/* <h3>Artists</h3> */}
    <Search placeholder={"Search Artists"}/>
    <ScrollableBox>
        {/* <ArtistsView /> */}
    </ScrollableBox>
    
  </>
  )
}

export default Artists