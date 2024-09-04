import { useEffect } from 'react'
import Card from '../../components/ui/Card/Card'
import emotionStyled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { ArtistActions } from '../../utils/constants/actions';
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

const ArtistsList = () => {
  
  const artists = useAppSelector((state: RootState) => state.artists.artists)
  const dispatch = useAppDispatch();

  // Dispatches an action to get list of artists
  useEffect(()=>{
    dispatch({type: ArtistActions.GET_ARTISTS_REQUESTED})
  }, [dispatch])

  return (
    <Container>
      {artists? (
        artists.map(artist => (
          <Card type={Types.artists} artist={artist}/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  )
}

export default ArtistsList;