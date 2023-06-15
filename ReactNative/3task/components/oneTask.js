import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const OneTask = (props) => {

    //console.warn(props.delete);
    return (
        <View style={styles}>
            <Text style={props.task.isDone ? { flex: 1, fontSize: 17, textDecorationLine: 'line-through' } :
                { flex: 1, fontSize: 17 }}>{props.task.text}</Text>
            <BouncyCheckbox
                style={{ flex: 1 }}
                fillColor="#e3007d"
                unfillColor="#FFFFFF"
                text="Done"
                onPress={(isChecked) => {
                    props.state(props.task.id, isChecked);
                }}
                textStyle={{ textDecorationLine: "none", color: 'black' }}
                iconStyle={{ borderColor: "#e3007d" }}
                innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
            />
            <BouncyCheckbox
                style={{ flex: 1 }}
                fillColor="#e3007d"
                unfillColor="#FFFFFF"
                text="Delete"
                textStyle={{ textDecorationLine: "none", color: 'black' }}
                iconStyle={{ borderColor: "#e3007d" }}
                innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
                onPress={(isChecked) => {
                    props.delete(props.task.id);
                }}
            />
        </View>
    );
}

export default OneTask;

const styles = StyleSheet.create({
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 30,

})