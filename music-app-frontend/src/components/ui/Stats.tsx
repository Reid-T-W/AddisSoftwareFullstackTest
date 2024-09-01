import React, { useEffect } from 'react'
import emotionStyled from '@emotion/styled';

const Container = emotionStyled.div`
  display: flex;
  flex-dirction: row;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  margin-bottom: 2rem;
`;
import Card from '../../components/ui/Card/Card'
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { StatsActions } from '../../utils/constants/actions';

const Stats = () => {

  const stats = useAppSelector((state: RootState) => state.stats.stats)
  const dispatch = useAppDispatch();

  // Dispatches an action to get stats data
  useEffect(()=>{
    dispatch({type: StatsActions.GET_STATS_REQUESTED})
  }, [dispatch])


  return (
    <Container>
      {stats? (
        <>
          <Card type='stats' content={`${stats.songsCount} Songs`}/>
          <Card type='stats' content={`${stats.albumsCount} Albums`}/>
          <Card type='stats' content={`${stats.artistsCount} Artists`}/>
          <Card type='stats' content={`${stats.genresCount} Genres`}/>
        </>
      ) : (
        <h1>Loading...</h1>
      )}      

    </Container>
  )
}

export default Stats