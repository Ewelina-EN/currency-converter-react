import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    margin: 10px;
    background-color: ${({ theme }) => theme.color.firefly};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 5px;
        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
`;