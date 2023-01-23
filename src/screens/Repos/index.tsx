import { useEffect, useState } from "react";
import { FlatList, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";

import api from "../../service/api";
import * as S from "./styles";

interface IReposResponse {
  id: number;
  name: string;
  repos_url: string;
  html_url: string;
  description: string;
  language: string;
}

interface ParamsProps {
  name: string;
}

export function Repos() {
  const [repos, setRepos] = useState<IReposResponse[]>([]);

  const route = useRoute();
  const { name } = route.params as ParamsProps;

  async function handleRepos() {
    await api.get<IReposResponse[]>(`users/${name}/repos?sort=pushed`)
      .then((response) => {
        setRepos(response.data);
      });
  }

  useEffect(() => {
    handleRepos();
  }, []);

  function renderRepos(item: IReposResponse) {
    return (
      <S.ContentRepos>
        <S.TextName>
          <S.TextName>{item.name}</S.TextName>
        </S.TextName>
        <S.ViewTextDescription>
          <S.TextDescription>{item.description}</S.TextDescription>
        </S.ViewTextDescription>
        {item.language === null ? (
          <S.ViewTextDidNotFindTheLink>
            <S.TextDidNotFindTheLink>
              ⚠️ Linguagem não encontrada
            </S.TextDidNotFindTheLink>
          </S.ViewTextDidNotFindTheLink>
        ) : (
          <S.ViewTextLanguage>
            <S.TextLanguage>{item.language}</S.TextLanguage>
          </S.ViewTextLanguage>
        )}
        <S.LinkRepo onPress={() => {
          Linking.openURL(item.html_url);
        }}>
          <S.TextLinkRepo>Link do repositório</S.TextLinkRepo>
        </S.LinkRepo>
      </S.ContentRepos>
    );
  }

  return (
    <S.Container>
      <FlatList
        data={repos}
        keyExtractor={(item: IReposResponse) => String(item.id)}
        renderItem={({ item }) => renderRepos(item)}
      />
    </S.Container>
  );
}