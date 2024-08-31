import React, { useState } from 'react';
import Search from '../../components/ui/Search';
import emotionStyled from '@emotion/styled';
import { ButtonStyled } from '../../components/ui/Button';
import AddSong from './AddSong';
import SongsList from './SongsList';
import { ISong } from '../../types/song';

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
 
const SongsView = () => {
  
  const [addSong, setAddSong] = useState(false)
  const [song, setSong] = useState<ISong>()

  const handleClick = () => {
    setAddSong(!addSong);
  };

  return (
    <Container>
      <RowContainer>
        <Search placeholder={"Search songs by name, artist, album, or genre"}/>
        <ButtonStyled 
          onClick={handleClick}
          color={addSong? 'orange' : '#636363'}
        >
          {addSong? 'Save' : 'Add Song'}
        </ButtonStyled>
      </RowContainer>
      {addSong && <AddSong setSong={setSong}/>}
      <ScrollableBox>
        <SongsList />
      </ScrollableBox>
    </Container>
  )
}

export default SongsView