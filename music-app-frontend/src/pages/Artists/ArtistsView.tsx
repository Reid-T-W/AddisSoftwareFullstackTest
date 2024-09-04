import emotionStyled from '@emotion/styled';
import Search from '../../components/ui/Search';
import ArtistsList from './ArtistsList';
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
const ArtistsView = () => {
  
    // When artists view is loaded the selected tab
    // should be artists.
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setSelectedTab("artists"));
    }, [])

    return (
        <Container>
          <RowContainer>
            <Search type="artists" placeholder={"Search artists by name"}/>
          </RowContainer>
          <ScrollableBox>
            <ArtistsList />
          </ScrollableBox>
        </Container>
      )
}

export default ArtistsView