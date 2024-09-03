import { useEffect } from 'react'
import Card from '../../components/ui/Card/Card'
import emotionStyled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { AlbumActions } from '../../utils/constants/actions';

const Container = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70vw;
`;

const AlbumsList = () => {
  
  const albums = useAppSelector((state: RootState) => state.albums.albums)
  const dispatch = useAppDispatch();

  // Dispatches an action to get list of albums
  useEffect(()=>{
    dispatch({type: AlbumActions.GET_ALBUMS_REQUESTED})
  }, [dispatch])

  return (
    <Container>
      {albums? (
        albums.map(album => (
          <Card type="albums" album={album}/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  )
}

export default AlbumsList