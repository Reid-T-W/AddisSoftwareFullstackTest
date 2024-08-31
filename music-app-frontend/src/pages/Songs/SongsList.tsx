import React from 'react'
import Card from '../../components/ui/Card/Card'
import emotionStyled from '@emotion/styled';

const Container = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70vw;
`;

const SongsList = () => {
  return (
    <Container>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
        <Card type="songs"/>
    </Container>
    
  )
}

export default SongsList