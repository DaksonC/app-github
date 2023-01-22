import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";

import * as S from "./styles";
import githubAnimate from "../../img/github.json";
import { Button } from "../../components/Button";

export function Home() {
  const navigation = useNavigation();

  function openSearch() {
    navigation.navigate("Search", { name: "" });
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
          à Pesquisa do Github
        </S.Subtitle>
        <Button
          title="Entrar com o Github"
          onPress={openSearch}
        />
      </S.Footer>
    </S.Container>
  );
}