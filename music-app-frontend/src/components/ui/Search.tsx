import React from 'react'

// import styled from '@emotion/styled';
import emotionStyled from '@emotion/styled';
import Button from './Button';

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
  return (
    <SearchBoxWrapper>
      <Input
        placeholder={`${placeholder}...`}
      />
      <Button value={"Search"}/>
    </SearchBoxWrapper>
);
}

export default Search