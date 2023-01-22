import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.shape};
  `};
`;