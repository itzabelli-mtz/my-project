import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Hamacas from '../screens/Hamacas'

const Stack = createStackNavigator()

export default function ComprarStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Comprar'
                component={Hamacas}
                options={{title:'Comprar'}}
            />
        </Stack.Navigator>
    )
}