import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Content = styled.View`
  height: 70%;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${theme.colors.primary};
    height: 30%;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    font-weight: bold;
    color: ${theme.colors.shape};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.gray_200};
  `}
`;

