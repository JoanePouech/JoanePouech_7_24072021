import styled from 'styled-components';
import colors from './colors';

const StyledSquareButton = styled.button`
    width: 20rem;
    padding: 2rem;
    margin: 2rem;
    background-color: ${colors.primary};
    border: none;
    border-radius: 8px;
`

function SquareButton ({children}) {
    return (
        <StyledSquareButton>{children}</StyledSquareButton>
    )
};

export default SquareButton;