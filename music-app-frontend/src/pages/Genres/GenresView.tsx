import emotionStyled from '@emotion/styled';
import Search from '../../components/ui/Search';
import GenresList from './GenresList';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { setSelectedTab } from '../../redux/features/settings/settings.slice';


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
const GenresView = () => {
    // When genres view is loaded the selected tab
    // should be genres.
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setSelectedTab("genres"));
    }, [])
    return (
        <Container>
          <RowContainer>
            <Search type="genres" placeholder={"Search genres by name"}/>
          </RowContainer>
          <ScrollableBox>
            <GenresList />
          </ScrollableBox>
        </Container>
      )
}

export default GenresView