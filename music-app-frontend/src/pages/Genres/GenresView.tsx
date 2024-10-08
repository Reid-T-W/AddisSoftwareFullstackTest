import emotionStyled from '@emotion/styled';
import Search from '../../components/ui/Search';
import GenresList from './GenresList';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { setSelectedTab } from '../../redux/features/settings/settings.slice';
import { Types } from '../../utils/constants/types';


const Container = emotionStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100%;
`;

const ScrollableBox = emotionStyled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  padding: 3;
`;

const RowContainer = emotionStyled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: baseline;
`

 /**
 * GenresView Component - This component is responsible for rendering the genres view.
 * It holds the list of genres component and search genres component.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
const GenresView = () => {
    // When genres view is loaded the selected tab
    // should be genres.
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setSelectedTab(Types.genres));
    }, [])
    return (
        <Container>
          <RowContainer>
            <Search type={Types.genres} placeholder={"Search genres by name"}/>
          </RowContainer>
          <ScrollableBox>
            <GenresList />
          </ScrollableBox>
        </Container>
      )
}

export default GenresView