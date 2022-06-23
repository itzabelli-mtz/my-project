import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Hamacas from '../screens/Hamacas/Hamacas'
import AddHamacas from '../screens/Hamacas/AddHamacas'

const Stack = createStackNavigator()

export default function HamacasStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Hamacas'
                component={Hamacas}
                options={{title:'Home'}}
            />
            <Stack.Screen
                name='Add-Hamacas'
                component={AddHamacas}
                options={{title:'Crear Negocio'}}
            />
        </Stack.Navigator>
    )
}