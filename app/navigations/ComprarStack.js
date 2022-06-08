import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Comprar from '../screens/Comprar'

const Stack = createStackNavigator()

export default function ComprarStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Comprar'
                component={Comprar}
                options={{title:'Comprar'}}
            />
        </Stack.Navigator>
    )
}