import { NavigationContainer } from '@react-navigation/native';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import Root from './Navigations/root';


export default function App() {
  return (
    <NavigationContainer>
      <Root></Root>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
