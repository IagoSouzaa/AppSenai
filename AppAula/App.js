import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UsersPage from "./Pages/usersPage";
import { UsersProvider } from "./Context/UsersContext";
import PrincLogin from "./Pages/PaginaPrinc/PrincLogin";
import { Inscrever, Login } from "./Pages/PaginaPrinc/Login";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <UsersProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={PrincLogin}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Inscrever} />
          <Stack.Screen
            name="Users"
            options={{ headerShown: false }}
            component={UsersPage}
          />
        </Stack.Navigator>
      </UsersProvider>
    </NavigationContainer>
  );
}
