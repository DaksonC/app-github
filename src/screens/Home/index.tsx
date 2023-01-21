import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export function Home() {
  const navigation = useNavigation();

  function openSearch() {
    navigation.navigate("Search", { name: "Dakson" });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#100c33",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
        }}
      >
        Home
      </Text>
      <Button title="Search" onPress={openSearch} />
    </View>
  );
}