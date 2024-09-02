import emotionStyled from '@emotion/styled';
import { FaArrowTrendUp } from "react-icons/fa6";
import React from 'react'
import { ISong } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { setSongToEmpty } from '../../../redux/features/songs/songs.slice';

interface CardContentProps {
  stats?: boolean;
}

const CardContent = emotionStyled.div<CardContentProps>`
  height: 200px;
  min-width: 200px;
  padding: auto;
  background-color: ${props => props.stats? 'None':'#636363'};
  border-top: ${props => props.stats? '1px solid orange':'None'};
  border-bottom: ${props => props.stats? '1px solid orange':'None'};
  margin: 1rem;
  border-radius: ${props => props.stats? '0px':'20px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: ${props => props.stats? 'mouse':'pointer'};;
`;

const AdditionalContainer = emotionStyled.div`
    display: flex;
    flex-direction: row;
    background-color: orange;
    width: 100%;
    height: 50%;
    border-radius: 0 0 20px 20px;
`

const IndividualHeadings = emotionStyled.p`
    margin-right: 1rem;
    margin-left: 1rem;
    font-size: 25px;
`

export interface CardProps {
  type: string;
  song?: ISong;
  content?: string;
}


const Card:React.FC<CardProps> = ({type, song, content}) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (id: string) => {
    // Set song state to empty, this will
    // avoid displaying previous state
    // values when navigating to the song details page.
    dispatch(setSongToEmpty());

    // Navigate to the song details page.
    navigate(`/songs/${id}`);
  }
  
  const songCard = (song: ISong) => {
    return (
      <CardContent onClick={() => handleClick(song._id)}>
        <h3>{song.title}</h3>
        <AdditionalContainer>
            <IndividualHeadings>{song.artist}</IndividualHeadings>
            <IndividualHeadings>{song.album}</IndividualHeadings>
            <IndividualHeadings>{song.genre}</IndividualHeadings>
        </AdditionalContainer>
      </CardContent>
    )
  }
  
  const statsCard = (content: string) => {
  
    return (
      <CardContent stats={true}>
          <h3>{content}</h3>
          <FaArrowTrendUp color='orange'/> 
      </CardContent>
    )
  }
  return (
    <>
      {/* If type of card is songs and song is not undefined, 
      then display songCard. If type of card is stats, then
       display statsCard. */}
      {type === "songs" && song && songCard(song)}
      {type === "stats" && statsCard(content?content:'')}
    </>
  )
}

export default Card