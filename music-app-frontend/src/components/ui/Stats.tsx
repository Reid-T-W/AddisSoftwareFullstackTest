import React from 'react'
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

const Stats = () => {
  return (
    <Container>
      <Card type='stats' content='24 Songs'/>
      <Card type='stats' content='5 Albums'/>
      <Card type='stats' content='5 Artists'/>
      <Card type='stats' content='10 Genres'/>
    </Container>
  )
}

export default Stats