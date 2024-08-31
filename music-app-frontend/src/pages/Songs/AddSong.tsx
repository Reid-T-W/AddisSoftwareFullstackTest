import React from 'react'
import emotionStyled from '@emotion/styled';

const InputDisplayStyled = emotionStyled.input`
    background: none;
    border: none;
    color: #B2B2B2;
    font-family: 'Roboto', sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: '500';
    line-height: normal;
    border-bottom: 1px solid orange;
    margin: 2rem;
`

const Container = emotionStyled.div`
  display: flex;
  flex-direction: row;
  max-width: 50%;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const AddSong = () => {

  return (
    <>
        <Container>
            <InputDisplayStyled name='title' type='text' placeholder='Title' />
            <InputDisplayStyled name='artist' type='text' placeholder='Artist' />
            <InputDisplayStyled name='album' type='text' placeholder='Album' />
            <InputDisplayStyled name='genre' type='text' placeholder='Genre' />
        </Container>
    </>
  )
}

export default AddSong