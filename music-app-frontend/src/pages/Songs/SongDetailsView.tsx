import React from 'react'
import AddSong from './AddSong'
import { ButtonStyled } from '../../components/ui/Button';
import { MdDelete } from "react-icons/md";
import emotionStyled from '@emotion/styled';
import { MdEdit } from "react-icons/md";

const Container = emotionStyled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 30%;
  height: 50%;
  background-color: #242424;
`;

interface RowContainerProps {
    justifyContent: string;
}

const RowContainer = emotionStyled.div<RowContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent};
    align-items: center;
    margin-bottom: 1rem;
    color: white;
    `;

const IconButton = emotionStyled.button`
    background-color: #242424;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    margin: 1rem;
    padding: 0.5rem;
    
    &:hover {
        background-color: orange;
    }
    `;



const SongDetailsView = () => {
  return (
    <>
        <Container>
            {/* <ButtonStyled color="orange">Delete</ButtonStyled> */}
            <RowContainer justifyContent="space-between">
                <h3>Title</h3>
                <RowContainer justifyContent="space-around">
                    <IconButton>
                        <MdEdit />
                    </IconButton>
                    <IconButton>
                        <MdDelete />
                    </IconButton>
                </RowContainer>
            </RowContainer>
            <AddSong />
        </Container>

    </>
  )
}

export default SongDetailsView