import React from 'react'
import emotionStyled from '@emotion/styled';

const ButtonStyled = emotionStyled.button`
    border: none;
    background-color: #636363;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    height: 60px;
    &:hover{
      background-color: #242424
    }
`
export interface ButtonProps {
    value: string;
}

const Button:React.FC<ButtonProps> = ({value}) => {
  return (
    <ButtonStyled>
        {value}
    </ButtonStyled>
  )
}

export default Button;