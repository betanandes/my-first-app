import { View, Text, StyleSheet} from "react-native";
import Login from "./src/login";

function App() {
  return <Login />;
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { 
    fontSize: 40,
    fontWeight: 'bold',
    position: 'center',
    color: 'blue'
  },
});