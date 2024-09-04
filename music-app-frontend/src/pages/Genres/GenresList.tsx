import { useEffect } from 'react'
import Card from '../../components/ui/Card/Card'
import emotionStyled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { GenreActions } from '../../utils/constants/actions';
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

const GenresList = () => {
  
  const genres = useAppSelector((state: RootState) => state.genres.genres)
  const dispatch = useAppDispatch();

  // Dispatches an action to get list of genres
  useEffect(()=>{
    dispatch({type: GenreActions.GET_GENRES_REQUESTED})
  }, [dispatch])

  return (
    <Container>
      {genres? (
        genres.map(genre => (
          <Card type={Types.genres} genre={genre}/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  )
}

export default GenresList;