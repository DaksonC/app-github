import { useState } from "react";

import * as S from "./styles";
import api from "../../service/api";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

interface IUserResponse {
  id: number;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  bio: string;
}

type ParamsProps = {
  avatar_url: string;
  username: string;
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
  const [location, setLocation] = useState<string>('Mundo');
  const [bio, setBio] = useState('Olá, seja bem vindo ao GitHub');

  const route = useRoute();
  const { avatar_url, username } = route.params as ParamsProps;

  const navigation = useNavigation();

  async function handleSearch() {
    await api.get<IUserResponse>(`users/${search}`)
      .then((response) => {
        setName(response.data.name);
        setAvatar(response.data.avatar_url);
        setPublicRepos(response.data.public_repos);
        setFollowers(response.data.followers);
        setFollowing(response.data.following);
        setLocation(response.data.location);
        setBio(response.data.bio);
      });
  }

  function handleNameProps() {
    setName(search);
    navigation.navigate('Repos', { name: search });
  }

  return (
    <S.Container >
      <S.Header>
        <S.HeaderAvatar source={{ uri: avatar_url }} />
        <S.HeaderTitle>{username}</S.HeaderTitle>
      </S.Header>
      <S.SearchInput
        placeholder="Digite o nome do usuário"
        onChangeText={SetSearch}
      />
      <Button
        title="Buscar perfil"
        onPress={handleSearch}
      />
      {name !== 'GitHub' ? (
        <S.ProfileContainer>
          <S.ProfileContent>
            <S.ProfileName>{name}</S.ProfileName>
            <S.ProfileImage source={{ uri: avatar }} />
          </S.ProfileContent>
          <S.ProfileViewLocation>
            <S.ProfileTextLocation>{location}</S.ProfileTextLocation>
          </S.ProfileViewLocation>
          {bio === null ? (
            <S.ViewTextIHavenCreatedMyBioYet>
              <S.TextIHavenCreatedMyBioYet>⚠️ Olá, eu ainda não criei minha bio</S.TextIHavenCreatedMyBioYet>
            </S.ViewTextIHavenCreatedMyBioYet>
          ) : (

            <S.ProfileViewBio>
              <S.ProfileTextBio>{bio}</S.ProfileTextBio>
            </S.ProfileViewBio>
          )}
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
      ) : (
        <S.ImageGithub source={{
          uri: "https://user-images.githubusercontent.com/81385265/213920295-e82580ac-b6f4-4430-b061-4e0461def1c9.png"
        }} />
      )
      }
    </S.Container>
  );
}