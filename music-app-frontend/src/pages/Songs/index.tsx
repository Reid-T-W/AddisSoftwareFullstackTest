import React from 'react'
import Search from '../../components/ui/Search'
import SongsView from './SongsView';
import emotionStyled from '@emotion/styled';
import Button from '../../components/ui/Button';
import AddSong from './AddSong';

const Container = emotionStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100%;
`;

const ScrollableBox = emotionStyled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  padding: 3;
`;

const RowContainer = emotionStyled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: baseline;
`

const Songs = () => {
  return (
    <Container>
      <RowContainer>
        <Search placeholder={"Search songs by name, artist, album, or genre"}/>
        <Button value={"Add Song"}/>
      </RowContainer>
      <AddSong />
      <ScrollableBox>
        <SongsView />
      </ScrollableBox>
    </Container>
  )
}

export default Songs