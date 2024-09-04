import emotionStyled from '@emotion/styled';
import { FaArrowTrendUp } from "react-icons/fa6";
import React from 'react'
import { IAlbum, IArtist, IGenre, ISong } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setSongToEmpty } from '../../../redux/features/songs/songs.slice';
import { truncateLongWords } from '../../../utils/helpers/displayHelpers';
import { MdDelete } from "react-icons/md";
import { SongActions } from '../../../utils/constants/actions';
import { FaExpandAlt } from "react-icons/fa";
import { RootState } from '../../../redux/store';
import { ImSpinner6 } from "react-icons/im";
import { Types } from '../../../utils/constants/types';

interface CardContentProps {
  stats?: boolean;
}

const CardContent = emotionStyled.div<CardContentProps>`
  height: ${props => props.stats? '200px':'400px'};;
  width: 300px;
  min-width: 300px;
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
    flex-direction: column;
    background-color: orange;
    width: 100%;
    height: 100%;
    border-radius: 0 0 20px 20px;
`

const ButtonContainer = emotionStyled.div`
    display: flex;
    flex-direction: row;
    background-color: orange;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    border-radius: 0 0 20px 20px;
`

const IndividualHeadings = emotionStyled.p`
    margin-right: 1rem;
    margin-left: 1rem;
    font-size: 25px;
    color: #636363;
`

const IconButton = emotionStyled.button`
    color: white;
    background-color: orange;
    width: 100%;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 0 0 20px 20px;
    padding: 0.5rem;
    border-top: 1px solid white;
    
    &:hover {
        color: #636363;
    }
    `;

export interface CardProps {
  type: string;
  song?: ISong;
  artist?: IArtist;
  album?: IAlbum;
  genre?: IGenre;
  content?: string;
}


const Card:React.FC<CardProps> = ({
  type,
  song,
  artist,
  album,
  genre,
  content,
}) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const deletingSong = useAppSelector((state: RootState) => state.songs.deletingSong);
  const songToDelete = useAppSelector((state: RootState) => state.songs.songToDelete);
  console.log("songToDelete: ", songToDelete)

  const handleSongCardClick = (id: string) => {
    // Set song state to empty, this will
    // avoid displaying previous state
    // values when navigating to the song details page.
    dispatch(setSongToEmpty());

    // Navigate to the song details page.
    navigate(`/songs/${id}`);
  }

  const handleSongDelete = (id: string) => {
    if (id) {
      dispatch({type: SongActions.DELETE_SONG_REQUESTED, payload: id});
  }
  }
  
  const songCard = (song: ISong) => {
    return (
      <CardContent>
        <h4>{truncateLongWords(song.title, 15)}</h4>
        <AdditionalContainer>
            <IndividualHeadings>{truncateLongWords(song.artist, 10)}</IndividualHeadings>
            <IndividualHeadings>{truncateLongWords(song.album, 10)}</IndividualHeadings>
            <IndividualHeadings>{truncateLongWords(song.genre, 10)}</IndividualHeadings>
            <ButtonContainer>
              <IconButton onClick={() => handleSongCardClick(song._id)}>
                <FaExpandAlt/>
              </IconButton>
              <IconButton onClick={() =>handleSongDelete(song._id)}>
                {deletingSong && songToDelete === song._id ? <ImSpinner6 /> : <MdDelete />}
              </IconButton>
            </ButtonContainer>
        </AdditionalContainer>
      </CardContent>
    )
  }

  const albumCard = (album: IAlbum) => {
    return (
      <CardContent>
        <h4>{truncateLongWords(album.album, 15)}</h4>
        <AdditionalContainer>
            <IndividualHeadings>{truncateLongWords(album.artist, 10)}</IndividualHeadings>
            <IndividualHeadings>{`Songs - ${album.noOfSongs}`}</IndividualHeadings>
        </AdditionalContainer>
      </CardContent>
    )
  }

  const artistCard = (artist: IArtist) => {
    return (
      <CardContent>
        <h4>{truncateLongWords(artist.artist, 15)}</h4>
        <AdditionalContainer>
            <IndividualHeadings>{`Albums - ${artist.noOfAlbums}`}</IndividualHeadings>
            <IndividualHeadings>{`Songs - ${artist.noOfSongs}`}</IndividualHeadings>
        </AdditionalContainer>
      </CardContent>
    )
  }

  const genreCard = (genre: IGenre) => {
    return (
      <CardContent>
        <h4>{truncateLongWords(genre.genre, 15)}</h4>
        <AdditionalContainer>
            <IndividualHeadings>{`Songs - ${genre.noOfSongs}`}</IndividualHeadings>
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
      {/* Display the proper card based on type and the 
      data being undefined. */}
      {type === Types.songs && song && songCard(song)}
      {type === Types.albums && album && albumCard(album)}
      {type === Types.artists && artist && artistCard(artist)}
      {type === Types.genres && genre && genreCard(genre)}
      {type === Types.stats && statsCard(content?content:'')}
    </>
  )
}

export default Card