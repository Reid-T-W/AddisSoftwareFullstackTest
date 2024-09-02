import React, { useEffect } from 'react'
import emotionStyled from '@emotion/styled';
import { ISong } from '../../types/song';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ButtonStyled } from '../../components/ui/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

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

interface AddSongProps {
    setSong?: React.Dispatch<React.SetStateAction<ISong | undefined>>
}

const AddSong:React.FC<AddSongProps> = ({setSong}) => {
    const addingSong = useAppSelector((state: RootState) => state.songs.addingSong)
    const songAdded = useAppSelector((state: RootState) => state.songs.songAdded)
    const dispatch = useAppDispatch();
    interface FormValues {
        title: string;
        artist: string;
        album : string;
        genre : string;
    }

    const initialValues: FormValues = {
        title: '',
        artist: '',
        album: '',
        genre: '',
    };

    const validationSchema = Yup.object({
        title: Yup.string().max(50).required('Song Title is required'),
        artist: Yup.string().max(50).required('Artist is required'),
        album: Yup.string().max(50).required('Album is required'),
        genre: Yup.string().max(50).required('Genre is required'),    
    })

    const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
        dispatch({type: 'ADD_SONG_REQUESTED', payload: values})
        },
    });

    // Reset form after song is successfully added
    useEffect(() => {
        if (songAdded && addingSong === false) {
            // Reset form
            formik.resetForm();
        }
    }, [songAdded, addingSong])

  return (
    <>
        {/* <Container> */}
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
                <ButtonStyled color="orange">
                    {addingSong? 'Loading...' : 'Save'}
                </ButtonStyled>
            </FormStyled>
        {/* </Container> */}
    </>
  )
}

export default AddSong