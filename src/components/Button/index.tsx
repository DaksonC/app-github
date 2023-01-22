import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = {
  title: string;
} & TouchableOpacityProps;

export function Button({ title, onPress }: Props) {
  return (
    <S.Container onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}