import styled from "styled-components";

export const StyledResult = styled.p`
    background-color: ${({ theme }) => theme.color.firefly};
    border: 2px solid ${({ theme }) => theme.color.black}; ;
    color: ${({ theme }) => theme.color.white}; 
    max-width: 700px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
`;