import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import * as S from "./styles";
import api from "../../service/api";
import { Button } from "../../components/Button";


interface IUserResponse {
  id: number;
  name: string;
  avatar_url: string;
}

export function Search() {
  const [search, SetSearch] = useState('');
  const [name, setName] = useState('GitHub');
  const [avatar, setAvatar] = useState(
    'https://user-images.githubusercontent.com/81385265/213897956-4e8951ae-af75-41b0-87e6-02a1f30b0364.png'
  );

  async function handleSearch() {
    await api.get<IUserResponse>(`users/${search}`)
      .then((response) => {
        setName(response.data.name);
        setAvatar(response.data.avatar_url);
      });
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
        <S.ProfileDetail>
          <S.ProfileDetailText>Ver mais</S.ProfileDetailText>
        </S.ProfileDetail>
      </S.ProfileContainer>
    </S.Container>
  );
}