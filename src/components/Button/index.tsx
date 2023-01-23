import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = {
  title: string;
} & TouchableOpacityProps;

export function Button({ title, onPress }: Props) {
  return (
    <S.Container onPress={onPress}>
      <S.IconGithub source={{
        uri: "https://user-images.githubusercontent.com/81385265/213919822-f8f8f7c0-a041-47ff-b838-033cccdc3388.png"
      }} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}