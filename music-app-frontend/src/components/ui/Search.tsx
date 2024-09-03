import React, { useState } from 'react'

// import styled from '@emotion/styled';
import emotionStyled from '@emotion/styled';
import { ButtonStyled } from './Button';
import { useAppDispatch } from '../../redux/hooks';
import { SongActions } from '../../utils/constants/actions';

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
    placeholder: string;
}

const Search:React.FC<SearchProps> = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchClick = () => {
    dispatch({type: SongActions.SEARCH_SONG_REQUESTED, payload: searchValue});
  }

  const handleSearchInput = (searchTerm: string) => {
    setSearchValue(searchTerm)
    dispatch({type: SongActions.SEARCH_SONG_REQUESTED, payload: searchTerm});
  }



  return (
    <SearchBoxWrapper>
      <Input
        placeholder={`${placeholder}...`}
        onChange={(e) => handleSearchInput(e.target.value)}
      />
      <ButtonStyled color={'#636363'} onClick={handleSearchClick}>
        Search
      </ButtonStyled>
    </SearchBoxWrapper>
);
}

export default Search