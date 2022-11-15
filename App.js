import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors/colors';
import { AntDesign } from '@expo/vector-icons';



export default function App() {
  // <AntDesign name="delete" size={24} color="black" />

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold'}}>FOODIE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:50,
  },
});
