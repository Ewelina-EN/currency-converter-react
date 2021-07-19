import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    max-width: 600px;
`;

export const Fieldset = styled.fieldset`
    text-align: center;
    margin: 20px auto;
    padding: 20px 0 20px;
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.azure};
`;