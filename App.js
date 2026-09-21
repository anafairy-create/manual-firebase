import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: "Cadastro" }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Início" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
