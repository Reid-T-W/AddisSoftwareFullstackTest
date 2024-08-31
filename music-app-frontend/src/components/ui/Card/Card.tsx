import emotionStyled from '@emotion/styled';
import { FaArrowTrendUp } from "react-icons/fa6";
import React from 'react'

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
  content?: string;
}


const songCard = () => {
  return (
    <CardContent>
      <h3>Title</h3>
      <AdditionalContainer>
          <IndividualHeadings>Artist</IndividualHeadings>
          <IndividualHeadings>Album</IndividualHeadings>
          <IndividualHeadings>Genre</IndividualHeadings>
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

const Card:React.FC<CardProps> = ({type, content}) => {
  return (
    <>
      {type === "songs" && songCard()}
      {type === "stats" && statsCard(content?content:'')}
      {/* {type === "songs" && songCard} */}
    </>
  )
}

export default Card