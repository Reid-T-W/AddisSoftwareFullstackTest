import React, { useEffect } from 'react'
import emotionStyled from '@emotion/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ButtonStyled } from '../../components/ui/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { SongActions } from '../../utils/constants/actions';
import { useParams } from 'react-router-dom';
import { ISong } from '../../types';
import { FormTypes } from '../../utils/constants/types';

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
interface FormStyledProps {
    type?: string;
}

const FormStyled = emotionStyled.form<FormStyledProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.type === FormTypes.addSongForm? '40%' : '70%'};
`;

interface SongFormProps {
    type: string,
    song?: ISong,
}

 /**
 * SongForm Component - This component is responsible for rendering the add song
 * and edit song forms. It can handle both add and edit forms by passing in the 
 * type as a prop.
 * 
 * @component
 * @param {string} props.type - The type of form to display, add or edit song form.
 * @param {string} [props.song] - Optional song details to be used when type is edit song form.
 * 
 * @example
 * <SongForm type={FormTypes.editSongForm} song={song}/>
 * <SongForm type={FormTypes.addSongForm} />
 * 
 * @returns {JSX.Element} The rendered component
 */
const SongForm:React.FC<SongFormProps> = ({type, song}) => {

    const dispatch = useAppDispatch();
  
    // FOR EDIT SONG FORM
    const updatingSongDetails = useAppSelector((state: RootState) => state.songs.updatingSongDetails);
    
    const { id } = useParams();
    
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

    // Initial values of form, if the type prop is editSongForm, the details of 
    // of the song will be populated. But if the type is addSongForm the form
    // values will be initialized to empty.
    const initialValues: FormValues = {
        title: type === FormTypes.editSongForm && song ? song?.title : '',
        artist: type === FormTypes.editSongForm && song ? song?.artist : '',
        album: type === FormTypes.editSongForm && song ? song?.album : '',
        genre: type === FormTypes.editSongForm && song ? song?.genre : '',
    };

    // Validation schema used for form
    const validationSchema = Yup.object({
        title: Yup.string().max(50).required('Song Title is required'),
        artist: Yup.string().max(50).required('Artist is required'),
        album: Yup.string().max(50).required('Album is required'),
        genre: Yup.string().max(50).required('Genre is required'),    
    })

    // Setup formik
    const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
        // On Submit the proper action will be dispatched based on the type prop
        if (type === FormTypes.addSongForm) {
            dispatch({type: SongActions.ADD_SONG_REQUESTED, payload: values});
        } else if (type === FormTypes.editSongForm && id) {
            dispatch({type: SongActions.UPDATE_SONG_REQUESTED, payload: {id, values}});
        }
    },
    });

  return (
    <>
        <FormStyled onSubmit={formik.handleSubmit} type={type}>
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
                {type === FormTypes.addSongForm? (
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