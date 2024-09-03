import React, { useState } from 'react'

// import styled from '@emotion/styled';
import emotionStyled from '@emotion/styled';
import { ButtonStyled } from './Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AlbumActions, ArtistActions, GenreActions, SongActions } from '../../utils/constants/actions';
import { RootState } from '../../redux/store';
import { ImSpinner } from "react-icons/im";

const SearchBoxWrapper = emotionStyled.div`
  display: flex;
  align-items: center;
  background-color: #f9fafb;
  border-radius: 4px;
  padding: 8px;
  width: 40%;
  margin-bottom: 1rem;
  margin-right: 2rem;
`

const Input = emotionStyled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 8px;
`

export interface SearchProps {
    type: string;
    placeholder: string;
}

const Search:React.FC<SearchProps> = ({ type, placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const loadingSongs = useAppSelector((state: RootState) => state.songs.loadingSongs);
  const loadingAlbums = useAppSelector((state: RootState) => state.albums.loadingAlbums);
  const loadingArtists = useAppSelector((state: RootState) => state.artists.loadingArtists);
  const loadingGenres = useAppSelector((state: RootState) => state.genres.loadingGenres);
  const dispatch = useAppDispatch();

  const search = (searhValueParam: string) => {
    if (type === "songs") {
      dispatch({type: SongActions.SEARCH_SONG_REQUESTED, payload: searhValueParam});
      return;
    }
    if (type === "artists") {
      dispatch({type: ArtistActions.SEARCH_ARTIST_REQUESTED, payload: searhValueParam});
      return;
    }
    if (type === "albums") {
      dispatch({type: AlbumActions.SEARCH_ALBUM_REQUESTED, payload: searhValueParam});
      return;
    }
    if (type === "genres") {
      dispatch({type: GenreActions.SEARCH_GENRE_REQUESTED, payload: searhValueParam});
      return;
    }
  }

  const handleSearchClick = () => {
    search(searchValue);
  }

  const handleSearchInput = (searchTerm: string) => {
    setSearchValue(searchTerm);
    search(searchTerm);
    // dispatch({type: SongActions.SEARCH_SONG_REQUESTED, payload: searchTerm});
  }


  return (
    <SearchBoxWrapper>
      {/* Search Input */}
      <Input
        placeholder={`${placeholder}...`}
        onChange={(e) => handleSearchInput(e.target.value)}
      />
      
      {/* Search Button */}
      {type==='songs' && (
        <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
          {loadingSongs? 'Searching...' : 'Search'}
        </ButtonStyled>
        )
      }
      {type==='albums' && (
        <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
          {loadingAlbums? 'Searching...' : 'Search'}
        </ButtonStyled>
        )
      }
      {type==='artists' && (
        <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
          {loadingArtists? 'Searching...' : 'Search'}
        </ButtonStyled>
        )
      }
      {type==='genres' && (
        <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
          {loadingGenres? 'Searching...' : 'Search'}
        </ButtonStyled>
        )
      }    
    </SearchBoxWrapper>
);
}

export default Search