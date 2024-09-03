import emotionStyled from '@emotion/styled';
import Search from '../../components/ui/Search';
import AlbumsList from '../Albums/AlbumsList';

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
const AlbumsView = () => {
    return (
        <Container>
          <RowContainer>
            <Search placeholder={"Search Albums"}/>
          </RowContainer>
          <ScrollableBox>
            <AlbumsList />
          </ScrollableBox>
        </Container>
      )
}

export default AlbumsView