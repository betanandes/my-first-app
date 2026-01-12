import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert} from "react-native";
import {useState} from "react";

const Login = () => {
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    function clickBtn() {
        Alert.alert("login", login);
        Alert.alert("senha", senha);
    }

    return <View style = {style.container}>
        <Text style = {style.titulo}>Olá, bem-vindoo!</Text>
        <TextInput onChangeText={setLogin} placeholder="Login" style = {style.input} />
        <TextInput keyboardType="numeric" onChangeText={setSenha} placeholder="Senha" style = {style.input} secureTextEntry={true} />
        <TouchableOpacity onPress={clickBtn} style = {style.btn}>
            <Text style = {style.textbtn}>Entrar</Text>
        </TouchableOpacity>
    </View>;
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: { 
    width: "80%",
    backgroundColor: '#D3DEF4',
    padding: 5,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 10,
  },
  btn: {
    width: "80%",
    backgroundColor: '#4C6EF5',
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
  },
  textbtn: { 
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  titulo: { 
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'center',
    color: 'blue'
  },
});