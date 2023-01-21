import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";

import * as S from "./styles";
import githubAnimate from "./github.json";
import { Button } from "../../components/Button";

export function Home() {
  const navigation = useNavigation();

  function openSearch() {
    navigation.navigate("Search", { name: "Dakson" });
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
          title="Entrar"
          onPress={openSearch}
        />
      </S.Footer>
    </S.Container>
  );
}