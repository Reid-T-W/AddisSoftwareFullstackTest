import emotionStyled from '@emotion/styled';
import Search from '../../components/ui/Search';
import GenresList from './GenresList';


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