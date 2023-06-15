import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {

  const COLORS = [{ colorName: "Cyan #2aa198", bgColor: "#2aa198" },
  { colorName: "Blue #268bd2", bgColor: "#268bd2" },
  { colorName: "Magenta #d33682", bgColor: "#d33682" },
  { colorName: "Orange #cb4b16", bgColor: "#cb4b16" }]

  return (
    <SafeAreaView style={{ marginTop: Platform.OS === "android" ? 30 : 0, padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Here are some boxes of different colours</Text>

      {COLORS.map((color) => (
        <Box colorName={color.colorName} bgColor={color.bgColor}></Box>
      ))}
    </SafeAreaView>
  );
}

