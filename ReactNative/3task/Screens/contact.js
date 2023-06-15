import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, SafeAreaView, SectionList, Text, View, Image, StyleSheet, Button } from 'react-native';
import routes from '../common/routes';

const Contact = () => {
    const contacts = [
        {
            id: "0",
            title: "A",
            data: [
                { id: 1, name: "user1", icon: require('../assets/Images/1.png') },
                { id: 2, name: "user2", icon: require('../assets/Images/2.png') },
                { id: 3, name: "user3", icon: require('../assets/Images/3.png') }
            ],
        },
        {
            id: "1",
            title: "B",
            data: [
                { id: 4, name: "user4", icon: require('../assets/Images/4.png') },
                { id: 5, name: "user5", icon: require('../assets/Images/5.png') }
            ],
        },
        {
            id: "2",
            title: "C",
            data: [
                { id: 6, name: "user6", icon: require('../assets/Images/6.png') }
            ],
        },
        {
            id: "3",
            title: "D",
            data: [
                { id: 7, name: "user7", icon: require('../assets/Images/7.png') }
            ],
        }
    ];

    const { navigate } = useNavigation();

    return (
        <SafeAreaView style={{ marginTop: Platform.OS === "android" ? 30 : 0 }}>

            <Button title="to do page" onPress={() => navigate(routes.toDoList)}>
            </Button>

            <SectionList sections={contacts}
                renderSectionHeader={(props) => <Text style={styles.sectionListHeader}>{props.section.title}</Text>}
                renderItem={(props) =>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <Image source={props.item.icon} style={{ height: 50, width: 50, marginHorizontal: 10 }} />
                        <Text style={styles.sectionListText}>{props.item.name}</Text>
                    </View>
                }>

            </SectionList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionListHeader: { fontSize: 18, fontWeight: "bold", backgroundColor: "lightgrey", padding: 15, margin: 10 },
    sectionListText: { fontSize: 16, marginTop: 13 }
})

export default Contact;