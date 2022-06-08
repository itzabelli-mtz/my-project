import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Nuevo from '../screens/Nuevo'

const Stack = createStackNavigator()

export default function NuevoStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Nuevo'
                component={Nuevo}
                options={{title:'Novedades'}}
            />
        </Stack.Navigator>
    )
}