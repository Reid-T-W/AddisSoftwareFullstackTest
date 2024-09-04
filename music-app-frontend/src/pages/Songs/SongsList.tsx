import { useEffect } from 'react'
import Card from '../../components/ui/Card/Card'
import emotionStyled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { SongActions } from '../../utils/constants/actions';

const Container = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;
  justify-content: center;
  align-items: top;
  text-align: center;
  width: 70vw;
`;

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
          <Card type="songs" song={song}/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  )
}

export default SongsList