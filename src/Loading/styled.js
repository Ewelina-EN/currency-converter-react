import styled from "styled-components";

export const StyledLoading = styled.fieldset`
    text-align: center;
    margin: 20px auto;
    padding: 20px 20px 20px;
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.azure};
`;