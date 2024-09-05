import emotionStyled from '@emotion/styled';
import Search from '../../components/ui/Search';
import AlbumsList from '../Albums/AlbumsList';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
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
 * AlbumsView Component - This component is responsible for rendering the albums view.
 * It holds the list of albums component and search albums component.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
const AlbumsView = () => {

    // When albums view is loaded the selected tab
    // should be albums.
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setSelectedTab(Types.albums));
    }, [])

    return (
        <Container>
          <RowContainer>
            <Search type={Types.albums} placeholder={"Search albums by name or artist name"}/>
          </RowContainer>
          <ScrollableBox>
            <AlbumsList />
          </ScrollableBox>
        </Container>
      )
}

export default AlbumsView