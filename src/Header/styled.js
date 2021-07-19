import styled from "styled-components";

export const StyledLegend = styled.legend`
    border: 1px solid ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.firefly};
    color: ${({ theme }) => theme.color.white}; 
    padding: 10px;
    border-radius: 5px;
`;