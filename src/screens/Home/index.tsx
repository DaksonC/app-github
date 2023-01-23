import axios from 'axios';
import { useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import AnimatedLottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import githubAnimate from "../../img/github.json";
import { Button } from "../../components/Button";

type AuthResponse = {
  params: {
    code: string;
  };
  type: string;
};

export function Home() {
  const navigation = useNavigation();

  async function handleGitHubSignIn() {
    try {
      const CLIENT_ID = "ea7b635ccdff0e991d7f";
      const REDIRECT_URI = "https://auth.expo.io/@daksoncruz/appgithub";
      const SCOPE = "user";
      const CLIENT_SECRET = "14c5ab57d0ebe19b1d42d6e0dc6dfd7911b79cb2";

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({
        authUrl,
      }) as AuthResponse;

      const response = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${params.code}&redirect_uri=${REDIRECT_URI}`
      );

      if (type === "success") {
        const ACCESS_TOKEN = response.data.split("&")[0].split("=")[1];
        const USER = await axios.get("https://api.github.com/user", {
          headers: {
            Authorization: `token ${ACCESS_TOKEN}`,
          },
        });

        navigation.navigate("Search",
          { avatar_url: USER.data.avatar_url, username: USER.data.name }
        );

      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <S.Content>
        <AnimatedLottieView source={githubAnimate} autoPlay loop />
      </S.Content>
      <S.Footer>
        <S.Title>
          Bem-vindo
        </S.Title>
        <S.Subtitle>
          à Pesquisa de perfil do Github
        </S.Subtitle>
        <Button
          title="Entrar com o Github"
          onPress={handleGitHubSignIn}
        />
      </S.Footer>
    </S.Container>
  );
}