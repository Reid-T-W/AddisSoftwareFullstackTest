import React, { useEffect } from 'react'
import emotionStyled from '@emotion/styled';
import { ISong } from '../../types/song';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ButtonStyled } from '../../components/ui/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { SongActions } from '../../utils/constants/actions';
import { useParams } from 'react-router-dom';

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

const FormStyled = emotionStyled.form`
  display: flex;
  flex-direction: column;
`;

interface SongFormProps {
    type?: string,
}

const SongForm:React.FC<SongFormProps> = ({type}) => {

    const dispatch = useAppDispatch();
  
    // FOR EDIT SONG FORM
    const song = useAppSelector((state: RootState) => state.songs.song);
    const updatingSongDetails = useAppSelector((state: RootState) => state.songs.updatingSongDetails);
    
    const { id } = useParams();
    // Dispatches an action to get song details
    useEffect(()=>{
        if (type==='editSongForm') {
            dispatch({type: SongActions.GET_SONG_DETAILS_REQUESTED, payload: id});
        }
    }, [dispatch, type, id])
    
    
    // FOR ADD SONG FORM
    const addingSong = useAppSelector((state: RootState) => state.songs.addingSong)
    const songAdded = useAppSelector((state: RootState) => state.songs.songAdded)

    // Reset form after song is successfully added
    useEffect(() => {
        if (songAdded && addingSong === false) {
            // Reset form
            formik.resetForm();
        }
    }, [songAdded, addingSong])

    interface FormValues {
        title: string;
        artist: string;
        album : string;
        genre : string;
    }

    const initialValues: FormValues = {
        title: type === 'editSongForm'&& song ? song?.title : '',
        artist: type === 'editSongForm'&& song ? song?.artist : '',
        album: type === 'editSongForm'&& song ? song?.album : '',
        genre: type === 'editSongForm'&& song ? song?.genre : '',
    };

    const validationSchema = Yup.object({
        title: Yup.string().max(50).required('Song Title is required'),
        artist: Yup.string().max(50).required('Artist is required'),
        album: Yup.string().max(50).required('Album is required'),
        genre: Yup.string().max(50).required('Genre is required'),    
    })

    const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
        if (type === 'addSongForm') {
            dispatch({type: 'ADD_SONG_REQUESTED', payload: values});
        } else if (type === 'editSongForm' && id) {
            dispatch({type: 'UPDATE_SONG_REQUESTED', payload: {id, values}});
        }
    },
    });

  return (
    <>
        <FormStyled onSubmit={formik.handleSubmit}>
            {/* Song Title Input */}
            <InputDisplayStyled 
                name='title' 
                type='text' 
                placeholder='Title' 
                value={formik.values.title}
                onChange={formik.handleChange}
            />
            {/* Handle error related to Song title */}
            {formik.touched.title && 
                formik.errors.title && 
                typeof formik.errors.title === 'string' ? (
                <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                    {formik.errors.title}
                </div>
            ) : null}
            
            {/* Artist Input */}
            <InputDisplayStyled 
                name='artist' 
                type='text' 
                placeholder='Artist' 
                value={formik.values.artist}
                onChange={formik.handleChange}
            />
            {/* Handle error related to Artist */}
            {formik.touched.artist && 
                formik.errors.artist && 
                typeof formik.errors.artist === 'string' ? (
                <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                    {formik.errors.artist}
                </div>
            ) : null}

            {/* Album Input */}
            <InputDisplayStyled 
                name='album' 
                type='text' 
                placeholder='Album' 
                value={formik.values.album}
                onChange={formik.handleChange}
            />
            {/* Handle error related to Album */}
            {formik.touched.album && 
                formik.errors.album && 
                typeof formik.errors.album === 'string' ? (
                <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                    {formik.errors.album}
                </div>
            ) : null}

            {/* Genre Input */}
            <InputDisplayStyled 
                name='genre' 
                type='text' 
                placeholder='Genre' 
                value={formik.values.genre}
                onChange={formik.handleChange}
            />
            {/* Handle error related to Genre */}
            {formik.touched.genre && 
                formik.errors.genre && 
                typeof formik.errors.genre === 'string' ? (
                <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                    {formik.errors.genre}
                </div>
            ) : null}

            {/* Save Button */}
            <ButtonStyled type="submit" color="orange">
                {type === 'addSongForm'? (
                        addingSong? 'Loading...' : 'Save'
                    ) : (
                        updatingSongDetails? 'Loading...' : 'Save'
                    )
                }
            </ButtonStyled>
        </FormStyled>
    </>
  )
}

export default SongForm;