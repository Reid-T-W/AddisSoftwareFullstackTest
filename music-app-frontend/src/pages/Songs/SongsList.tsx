import { useEffect } from 'react'
import Card from '../../components/ui/Card/Card'
import emotionStyled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { SongActions } from '../../utils/constants/actions';
import { Types } from '../../utils/constants/types';

const Container = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;
  justify-content: center;
  align-items: top;
  text-align: center;
  width: 70vw;
`;

/**
 * SongsList Component - Dispatches an action to get a list
 * of songs and renders them using the Card Component. 
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
const SongsList = () => {
  
  const songs = useAppSelector((state: RootState) => state.songs.songs)
  const dispatch = useAppDispatch();

  // Dispatches an action to get list of songs
  useEffect(()=>{
    dispatch({type: SongActions.GET_SONGS_REQUESTED})
  }, [dispatch])

  return (
    <Container>
      {songs? (
        songs.map(song => (
          <Card type={Types.songs} song={song}/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  )
}

export default SongsList