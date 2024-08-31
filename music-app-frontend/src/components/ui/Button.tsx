import emotionStyled from '@emotion/styled';


interface ButtonStyledProps {
    color: string;
}

export const ButtonStyled = emotionStyled.button<ButtonStyledProps>`
    border: none;
    background-color: ${props => props.color};
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    height: 60px;
    &:hover{
      opacity: 0.5
    }
`
