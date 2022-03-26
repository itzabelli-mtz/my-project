import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Hamacas from '../screens/Hamacas'

const Stack = createStackNavigator()

export default function HamacasStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Hamacas'
                component={Hamacas}
                options={{title:'Home'}}
            />
        </Stack.Navigator>
    )
}