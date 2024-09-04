import styled from '@emotion/styled';
import {
    ARTISTS_ROUTE,
    ALBUMS_ROUTE,
    GENRES_ROUTE,
    HOME_ROUTE
} from '../../utils/constants/routes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { setSelectedTab } from '../../redux/features/settings/settings.slice';
import { useNavigate } from 'react-router-dom';
import { Types } from '../../utils/constants/types';

interface MenuItemProps {
  color: string;
}

interface HandleClickedProps {
  route: string,
  tab: string
}

const HorizontalMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MenuItem = styled.a<MenuItemProps>`
  color: ${props => props.color};
  text-decoration: none;
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid #ccc;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
  }

  &:hover {
  color: orange;
}
`;

const HorizontalMenu = () => {
  const navigate = useNavigate();
  const selectedTab = useAppSelector((state: RootState) => state.settings.selectedTab)
  const dispatch = useAppDispatch();
  
  const handleClick = (data: HandleClickedProps) => {
    navigate(data.route);
    dispatch(setSelectedTab(data.tab));
  }


  return (
    <HorizontalMenuContainer>
        <MenuItem 
          color={selectedTab === Types.songs ? 'orange' : 'white'} 
          onClick={() => handleClick({
              route: HOME_ROUTE,
              tab: Types.songs,
            })
          }
        >
          <h3>Songs</h3>
        </MenuItem>
        <MenuItem 
          color={selectedTab === Types.artists ? 'orange' : 'white'} 
          onClick={() => handleClick({
              route: ARTISTS_ROUTE,
              tab: Types.artists,
            })
          }
        >
          <h3>Artists</h3>
        </MenuItem>
        <MenuItem 
          color={selectedTab === Types.albums ? 'orange' : 'white'}
          onClick={() => handleClick({
            route: ALBUMS_ROUTE,
            tab: Types.albums,
          })
        }
        >
          <h3>Albums</h3>
        </MenuItem>
        <MenuItem 
          color={selectedTab === Types.genres ? 'orange' : 'white'}
          onClick={() => handleClick({
            route: GENRES_ROUTE,
            tab: Types.genres,
          })
        }
        >
            <h3>Genres</h3>
        </MenuItem>
    </HorizontalMenuContainer>
  )
}

export default HorizontalMenu