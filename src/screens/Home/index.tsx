import axios from 'axios';
import * as AuthSession from 'expo-auth-session';
import AnimatedLottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as S from "./styles";
import githubAnimate from "../../img/github.json";
import { Button } from "../../components/Button";
import { CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv';

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
      const REDIRECT_URI = "https://auth.expo.io/@daksoncruz/appgithub";
      const SCOPE = "user";

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

        await AsyncStorage.setItem('@appgithub:token', ACCESS_TOKEN);

        try {
          const value = await AsyncStorage.getItem('@appgithub:token');

          if (value === ACCESS_TOKEN || value !== undefined || value !== null) {
            navigation.navigate("Search",
              { avatar_url: USER.data.avatar_url, username: USER.data.name }
            );
          }
        } catch (error) {
          console.log(error);
        }
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