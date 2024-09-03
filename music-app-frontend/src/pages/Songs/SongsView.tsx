import React, { useState } from 'react';
import Search from '../../components/ui/Search';
import emotionStyled from '@emotion/styled';
import { ButtonStyled } from '../../components/ui/Button';
import SongForm from './SongForm';
import SongsList from './SongsList';
import { ISong } from '../../types';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

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
        <Search type="songs" placeholder={"Search songs by title, artist, album, or genre"}/>
        <ButtonStyled 
          onClick={handleClick}
          color={'#636363'}
        >
          {addSong? 'Close' : 'Add Song'}
        </ButtonStyled>
      </RowContainer>
      {addSong && <SongForm type={'addSongForm'} />}
      <ScrollableBox>
        <SongsList />
      </ScrollableBox>
    </Container>
  )
}

export default SongsView