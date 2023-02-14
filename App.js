import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TODO LIST</Text>

      <View style={styles.boxInput}>
        <TextInput
          style={styles.input}
          placeholder="digite algo..."
        ></TextInput>
        <Button title="adicionar"></Button>
      </View>

      <View style={styles.border}></View>

      <View style={styles.lista}>
        <Text>Eu sou um texto</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 40,
    alignSelf: "center",
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    width: "60%",
  },
  boxInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  border: {
    borderBottomWidth: 1,
    marginTop: 15,
  },
  lista: {
    marginLeft: 20,
    marginTop: 10,
  },
});
