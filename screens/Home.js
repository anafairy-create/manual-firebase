import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { sair } from "../services/auth";
import { auth } from "../config/firebase";

export default function Home({ navigation }) {
  async function realizarLogout() {
    try {
      await sair();
      navigation.replace("Login");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível sair da conta.");
    }
  }

  const emailUsuario = auth.currentUser?.email || "Usuário";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem-vindo!</Text>
      <Text style={styles.user}>Usuário: {emailUsuario}</Text>

      <Button title="Sair" onPress={realizarLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  user: {
    fontSize: 16,
    marginBottom: 24,
  },
});
