import React from 'react'
import Search from '../../components/ui/Search'
import emotionStyled from '@emotion/styled';


const ScrollableBox = emotionStyled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 3;
`;

const Genres = () => {
  return (
    <>
      {/* <h3>Genres</h3> */}
      <Search placeholder={"Search Genres"}/>
      <ScrollableBox>
        {/* <GenresView /> */}
      </ScrollableBox>
    </>
  )
}

export default Genres