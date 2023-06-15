import { Text, View } from 'react-native';

export default function Box({ colorName, bgColor }) {

    return (
        <View>
            <Text style={{ backgroundColor: bgColor, textAlign: "center", color: "white", padding: 20, marginTop: 20, borderRadius: 10, fontWeight: 'bold' }}>{colorName}</Text>
        </View>
    );
}