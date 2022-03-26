import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Hamacas from '../screens/Hamacas'

const Stack = createStackNavigator()

export default function FavoritesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Favorites'
                component={Hamacas}
                options={{title:'Favoritos'}}
            />
        </Stack.Navigator>
    )
}