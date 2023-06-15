
import React from 'react';
import Contact from '../Screens/contact';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../common/routes'
import ToDo from '../Screens/toDo';

const stack = createNativeStackNavigator();

const Root = () => {
    return (
        <stack.Navigator>
            <stack.Screen name={routes.contact} component={Contact}
                options={{ header: () => null }}>
            
            </stack.Screen>
            <stack.Screen name={routes.toDoList} component={ToDo}
                options={{
                    headerTitle: "My ToDo List",
                    headerStyle: {backgroundColor:"#e3007d"},
                    headerTintColor:"white",
                    headerTitleAlign:"center"
                }}></stack.Screen>
        </stack.Navigator>
    );
}

export default Root;