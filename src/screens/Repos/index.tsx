import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

type ParamsProps = {
  name: string;
  age: string;
};

export function Repos() {
  const route = useRoute();
  const { name, age } = route.params as ParamsProps;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#100c33",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style={{
        color: "#fff",
        fontSize: 20,
      }}>Nome: {name}</Text>
      <Text style={{
        color: "#535151",
        fontSize: 15,
      }}>Idade: {age}</Text>
    </View>
  );
}