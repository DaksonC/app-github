import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import * as S from "./styles";
import api from "../../service/api";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";


interface IUserResponse {
  id: number;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export function Search() {
  const [search, SetSearch] = useState('');
  const [name, setName] = useState('GitHub');
  const [avatar, setAvatar] = useState(
    'https://user-images.githubusercontent.com/81385265/213897956-4e8951ae-af75-41b0-87e6-02a1f30b0364.png'
  );
  const [public_repos, setPublicRepos] = useState<number>();
  const [followers, setFollowers] = useState<number>();
  const [following, setFollowing] = useState<number>();

  const navigation = useNavigation();

  async function handleSearch() {
    await api.get<IUserResponse>(`users/${search}`)
      .then((response) => {
        setName(response.data.name);
        setAvatar(response.data.avatar_url);
        setPublicRepos(response.data.public_repos);
        setFollowers(response.data.followers);
        setFollowing(response.data.following);
      });
  }

  function handleNameProps() {
    setName(search);
    navigation.navigate('Repos', { name: search });
  }

  return (
    <S.Container >
      <S.Header>
        <S.HeaderTitle>Busca</S.HeaderTitle>
      </S.Header>
      <S.SearchInput
        placeholder="Digite o nome do usuário"
        onChangeText={SetSearch}
      />
      <Button
        title="Buscar"
        onPress={handleSearch}
      />
      <S.ProfileContainer>
        <S.ProfileContent>
          <S.ProfileImage source={{ uri: avatar }} />
          <S.ProfileName>{name}</S.ProfileName>
        </S.ProfileContent>
        <S.ProfileDeashboard>
          <S.ProfileViewDeashboardItem>
            <S.ProfileLabelItem>Repositórios</S.ProfileLabelItem>
            <S.ProfileDeashboardItem>{public_repos}</S.ProfileDeashboardItem>
          </S.ProfileViewDeashboardItem>
          <S.ProfileViewDeashboardItem>
            <S.ProfileLabelItem>Seguidores</S.ProfileLabelItem>
            <S.ProfileDeashboardItem>{followers}</S.ProfileDeashboardItem>
          </S.ProfileViewDeashboardItem>
          <S.ProfileViewDeashboardItem>
            <S.ProfileLabelItem>Seguindo</S.ProfileLabelItem>
            <S.ProfileDeashboardItem>{following}</S.ProfileDeashboardItem>
          </S.ProfileViewDeashboardItem>
        </S.ProfileDeashboard>
        <S.ProfileDetail onPress={handleNameProps}>
          <S.ProfileDetailText>Ver mais</S.ProfileDetailText>
        </S.ProfileDetail>
      </S.ProfileContainer>
    </S.Container>
  );
}