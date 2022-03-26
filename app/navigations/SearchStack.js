import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Hamacas from '../screens/Hamacas'

const Stack = createStackNavigator()

export default function SearchStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Search'
                component={Hamacas}
                options={{title:'Buscar'}}
            />
        </Stack.Navigator>
    )
}