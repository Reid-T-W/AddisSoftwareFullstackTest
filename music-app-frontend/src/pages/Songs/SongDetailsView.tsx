import { useEffect } from 'react'
import SongForm from './SongForm'
import { MdDelete } from "react-icons/md";
import emotionStyled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SongActions } from '../../utils/constants/actions';
import { RootState } from '../../redux/store';
import { ImSpinner6 } from "react-icons/im";
import { setSongDeletedToFalse } from '../../redux/features/songs/songs.slice';
import { FormTypes } from '../../utils/constants/types';

const Container = emotionStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 40%;
  height: 60%;
  background-color: #242424;
  border-left: 1px solid orange;
  border-right: 1px solid orange;
`;

interface RowContainerProps {
    justifyContent: string;
}

const RowContainer = emotionStyled.div<RowContainerProps>`
    display: flex;
    flex-direction: row;
    max-height: 50%;
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

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const deletingSong = useAppSelector((state: RootState) => state.songs.deletingSong);
    const songDeleted = useAppSelector((state: RootState) => state.songs.songDeleted);
    const song = useAppSelector((state: RootState) => state.songs.song);
    const navigate = useNavigate();
    
    // Dispatches an action to get song details
    useEffect(()=>{
        dispatch({type: SongActions.GET_SONG_DETAILS_REQUESTED, payload: id});
    }, [dispatch, id])

    const handleClick = () => {
        if (id) {
            dispatch({type: SongActions.DELETE_SONG_REQUESTED, payload: id});
        }
    }

    // Navigate to home page when song deletion is successful
    useEffect(()=>{
        if (songDeleted){
            navigate('/');
            // Reseting to the original state
            dispatch(setSongDeletedToFalse());
        }
    },[songDeleted])

    return (
    <>
        <Container>
        {song ? (
                <>
                    {/* <ButtonStyled color="orange">Delete</ButtonStyled> */}
                    <RowContainer justifyContent="space-between">
                        <h3>{song?.title}</h3>
                        {/* <RowContainer justifyContent="space-around"> */}
                        <IconButton onClick={handleClick}>
                            {deletingSong? <ImSpinner6 /> : <MdDelete />}
                        </IconButton>
                        {/* </RowContainer> */}
                    </RowContainer>
                    <SongForm type={FormTypes.editSongForm} song={song}/>
                </>
            ):
            (
                <>Loading...</>
            )}
            
        </Container>

    </>
    )
}

export default SongDetailsView