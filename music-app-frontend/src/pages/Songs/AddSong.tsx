import React from 'react'
import emotionStyled from '@emotion/styled';
import { ISong } from '../../types/song';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ButtonStyled } from '../../components/ui/Button';

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

// const Container = emotionStyled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 50%;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 1rem;
// `;

const FormStyled = emotionStyled.form`
  display: flex;
  flex-direction: column;
`;



interface AddSongProps {
    setSong: React.Dispatch<React.SetStateAction<ISong | undefined>>
}

const AddSong:React.FC<AddSongProps> = ({setSong}) => {

    interface FormValues {
        song: string;
        artist: string;
        album : string;
        genre : string;
    }

    const initialValues: FormValues = {
        song: '',
        artist: '',
        album: '',
        genre: '',
    };

    const validationSchema = Yup.object({
        song: Yup.string().max(50).required('Song Title is required'),
        artist: Yup.string().max(50).required('Artist is required'),
        album: Yup.string().max(50).required('Album is required'),
        genre: Yup.string().max(50).required('Genre is required'),    
    })


    const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
        console.log("values: ", values)
        console.log("submitted");
        // const req = {
        // user_id: customer?.users_id,
        // is_active: values.is_active,
        // };

        // try {
        // const res = await updateSubscriber(req).unwrap();
        // console.log('RESS', res);
        // } catch (error) {
        // console.log('ERRORR', error);
        // }
        },
    });

  return (
    <>
        {/* <Container> */}
            <FormStyled onSubmit={formik.handleSubmit}>
                {/* Song Title Input */}
                <InputDisplayStyled 
                    name='song' 
                    type='text' 
                    placeholder='Title' 
                    value={formik.values.song}
                    onChange={formik.handleChange}
                />
                {/* Handle error related to Song title */}
                {formik.touched.song && 
                 formik.errors.song && 
                 typeof formik.errors.song === 'string' ? (
                    <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                        {formik.errors.song}
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
                {/* Handle error related to Song title */}
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
                {/* Handle error related to Song title */}
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
                {/* Handle error related to Song title */}
                {formik.touched.genre && 
                 formik.errors.genre && 
                 typeof formik.errors.genre === 'string' ? (
                    <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                        {formik.errors.genre}
                    </div>
                ) : null}

                {/* Save Button */}
                <ButtonStyled color="orange">
                    Save
                </ButtonStyled>
            </FormStyled>
        {/* </Container> */}
    </>
  )
}

export default AddSong