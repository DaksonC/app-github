import * as AuthSession from 'expo-auth-session';
import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import axios from 'axios';

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

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({
        authUrl,
      }) as AuthResponse;

      console.log(params.code);
      console.log(type, params)

      // if (type === "success") {
      //   const response = await axios.get(
      //     "https://api.github.com/user",
      //     {
      //       headers: {
      //         "Authorization": `${params.code}`,
      //       },
      //     }
      //   )
      //     .then((response) => {
      //       console.log(response.data);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });

      //   console.log(response);
      // }

      navigation.navigate("Search", { name: "" });

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