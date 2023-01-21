import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export function Home() {
  const navigation = useNavigation();

  function openSearch() {
    navigation.navigate("Search", { name: "Dakson" });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
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
      <TouchableOpacity
        style={{
          backgroundColor: "#100c33",
          width: 200,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={openSearch}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}