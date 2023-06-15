import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import OneTask from '../components/oneTask';

const ToDo = () => {

    const [data, setData] = useState({ task: "", emptyText: "", tasks: [] });
    const [tasks, setTasks] = useState([]);

    const addPressed = () => {
        if (data.task.length === 0) {
            setData((prevData) => ({ ...prevData, emptyText: "Empty Text!!" }));
        } else if (data.task.length <= 3) {
            setData((prevData) => ({ ...prevData, emptyText: "min characters must be more than 3 chars" }));
        } else {
            setData((prevData) => ({ ...prevData, emptyText: "", task: "" }));
            //setData((prevData)=>({...prevData, tasks.push()}));
            setTasks(prevTasks => [...prevTasks, { id: uuid.v4(), text: data.task, isDone: false }]);
        }
    }

    const handleChange = (value) => {
        setData((prevData) => ({ ...prevData, task: value }));
    }

    const changeTaskState = (id, done) => {
        const myTasks = [...tasks];
        const oldTask = myTasks.find(item => item.id === id);
        oldTask.isDone = done;
        setTasks(myTasks);
    }

    const deleteTask = (id) => {
        setTasks(
            tasks.filter(t =>
                t.id !== id
            )
        );
    }

    return (
        <View style={{ height: "100%", backgroundColor: "black" }}>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <TextInput onChangeText={(val) => handleChange(val)} placeholder='Enter a task'
                    value={data.task}
                    style={{
                        flex: 3, borderBottomWidth: 1,
                        color: "white", borderBottomColor: "#e3007d", padding: 5
                    }}></TextInput>
                <TouchableOpacity onPress={addPressed}>
                    <Text style={{
                        flex: 1, backgroundColor: "#e3007d", padding: 10, color: "white",
                        borderRadius: 10, marginHorizontal: 10, fontSize: 16
                    }}>Add</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 17, color: "white", margin: 10 }}>{data.emptyText}</Text>

            {tasks.length > 0 && <Text style={{ fontSize: 19, color: "white", margin: 10, textAlign: 'center' }}>{tasks.filter(item => item.isDone === true).length} done of {tasks.length} tasks</Text>}
            {tasks.map((item) =>

                <OneTask task={item} state={changeTaskState} delete={deleteTask}></OneTask>
            )}
        </View>
    );
};

export default ToDo;