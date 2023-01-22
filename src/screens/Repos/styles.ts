import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background};
  `};
`;

export const ContentRepos = styled.View`
  ${({ theme }) => css`
    margin-top: 20px;
    padding: 10px;
    border-radius: 15px;
    background-color: ${theme.colors.terciary};
  `};
`;

export const ViewTextName = styled.View``;

export const TextName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;

export const ViewTextDescription = styled.View``;

export const TextDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;

export const ViewTextLanguage = styled.View``;

export const TextLanguage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;

export const LinkRepo = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_100};
  `};
`;
