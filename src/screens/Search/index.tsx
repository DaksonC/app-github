import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

type ParamsProps = {
  age: string;
  name: string;
};

export function Search() {
  const route = useRoute();
  const { age, name } = route.params as ParamsProps;

  const navigation = useNavigation();

  function openRepos() {
    navigation.navigate("Repos", { age: "39" });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#100c33",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
        }}
      >
        Search
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
        }}
      >
        Nome: {name}
      </Text>
      <Text
        style={{
          color: "#535151",
          fontSize: 15,
        }}
      >
        Idade: {age}
      </Text>
      <Button title="Repos" onPress={openRepos} />
    </View>
  );
}