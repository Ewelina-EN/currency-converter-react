import styled from "styled-components";

export const LabelText = styled.span`
    color: ${({ theme }) => theme.color.black};
    display: inline-block;
    width: 100%;
    max-width: 150px;
    margin-right: 5px;
    text-align: center;
`;

export const CurrencySelect = styled.select`
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
    border-color: ${({ theme }) => theme.color.black};
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
`;