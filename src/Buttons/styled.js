import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    margin: 10px;
    background-color: #0f2637;
    color: white;
    padding: 10px;
    border-radius: 5px;

        &:hover {
            background-color: #1c2161ed;
        }

        &:active {
            background-color: hsl(236deg 55% 25% / 70%);
        }
`;