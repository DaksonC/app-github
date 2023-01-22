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
    font-size: 20px;
    color: ${theme.colors.secondary};
  `};
`;

export const ViewTextDescription = styled.View`
  margin-top: 10px;
`;

export const TextDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;

export const ViewTextLanguage = styled.View`
  margin-top: 10px;
`;

export const TextLanguage = styled.Text`
  ${({ theme }) => css`
    width: 100px;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
    text-align: center;
    color: ${theme.colors.text};
    background-color: ${theme.colors.gray_700};

  `};
`;

export const LinkRepo = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.success_light};
  `};
`;

export const TextLinkRepo = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.gray_700};
  `};
`;
