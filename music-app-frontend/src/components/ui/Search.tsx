import React, { useState } from 'react'

// import styled from '@emotion/styled';
import emotionStyled from '@emotion/styled';
import { ButtonStyled } from './Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AlbumActions, ArtistActions, GenreActions, SongActions } from '../../utils/constants/actions';
import { RootState } from '../../redux/store';
import { Types } from '../../utils/constants/types';

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
  const searchingSongs = useAppSelector((state: RootState) => state.songs.searchingSongs);
  const searchingAlbums = useAppSelector((state: RootState) => state.albums.searchingAlbums);
  const searchingArtists = useAppSelector((state: RootState) => state.artists.searchingArtists);
  const searchingGenres = useAppSelector((state: RootState) => state.genres.searchingGenres);
  const dispatch = useAppDispatch();

  const search = (searhValueParam: string) => {
    if (type === Types.songs) {
      dispatch({type: SongActions.SEARCH_SONG_REQUESTED, payload: searhValueParam});
      return;
    }
    if (type === Types.artists) {
      dispatch({type: ArtistActions.SEARCH_ARTIST_REQUESTED, payload: searhValueParam});
      return;
    }
    if (type === Types.albums) {
      dispatch({type: AlbumActions.SEARCH_ALBUM_REQUESTED, payload: searhValueParam});
      return;
    }
    if (type === Types.genres) {
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
  }


  return (
    <SearchBoxWrapper>
      {/* Search Input */}
      <Input
        placeholder={`${placeholder}...`}
        onChange={(e) => handleSearchInput(e.target.value)}
      />

      {/* Search Button */}
      {type===Types.songs && (
        <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
          {searchingSongs? 'Searching...' : 'Search'}
        </ButtonStyled>
        )
      }
      {type===Types.albums && (
        <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
          {searchingAlbums? 'Searching...' : 'Search'}
        </ButtonStyled>
        )
      }
      {type===Types.artists && (
        <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
          {searchingArtists? 'Searching...' : 'Search'}
        </ButtonStyled>
        )
      }
      {type===Types.genres && (
        <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
          {searchingGenres? 'Searching...' : 'Search'}
        </ButtonStyled>
        )
      }    
    </SearchBoxWrapper>
);
}

export default Search