import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Hamacas from '../screens/Hamacas'

const Stack = createStackNavigator()

export default function NuevoStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Nuevo'
                component={Hamacas}
                options={{title:'Novedades'}}
            />
        </Stack.Navigator>
    )
}