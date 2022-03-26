import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Hamacas from '../screens/Hamacas'

const Stack = createStackNavigator()

export default function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Account'
                component={Hamacas}
                options={{title:'Crear'}}
            />
        </Stack.Navigator>
    )
}