import { useEffect, useState } from 'react';
import Search from '../../components/ui/Search';
import emotionStyled from '@emotion/styled';
import { ButtonStyled } from '../../components/ui/Button';
import SongForm from './SongForm';
import SongsList from './SongsList';
import { useAppDispatch } from '../../redux/hooks';
import { setSelectedTab } from '../../redux/features/settings/settings.slice';
import { FormTypes, Types } from '../../utils/constants/types';

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
 /**
 * SongsView Component - This component is responsible for rendering the songs view.
 * It holds the list of songs component, search songs component, add song button, and
 * add song form component.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
const SongsView = () => {
  
  const [addSong, setAddSong] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setAddSong(!addSong);
  };

  // When songs view is loaded the selected tab
  // should be songs. 
  useEffect(() => {
    dispatch(setSelectedTab(Types.songs));
  }, [])
  
  return (
    <Container>
      <RowContainer>
        {/* Search Component will be called with type set to songs and a custom placeholder*/}
        <Search type={Types.songs} placeholder={"Search songs by title, artist, album, or genre"}/>
  
        {/* Button for adding a song */}
        <ButtonStyled 
          onClick={handleClick}
          color={'#636363'}
        >
          {addSong? 'Close' : 'Add Song'}
        </ButtonStyled>
      </RowContainer>

      {/* A form for adding a new song */}
      {addSong && <SongForm type={FormTypes.addSongForm} />}
      
      <ScrollableBox>
        {/* List of songs */}
        <SongsList />
      </ScrollableBox>

    </Container>
  )
}

export default SongsView