import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Repos } from "../screens/Repos";
import { Search } from "../screens/Search";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          title: "Pesquisar perfil no Github",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#100c33",
          },
          headerTintColor: "#fff",
        }}
      />
      <Screen
        name="Repos"
        component={Repos}
        options={{
          title: "Repositórios",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#100c33",
          },
          headerTintColor: "#fff",
        }}
      />
    </Navigator>
  );
}