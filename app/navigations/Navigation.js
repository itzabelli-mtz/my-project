import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

//import Hamacas from '../screens/Hamacas'
//import Account from '../screens/Account'
//import Comprar from '../screens/Comprar'
//import Nuevo from '../screens/Nuevo'

import HamacasStack from './HamacasStack'
import AccountStack from './AccountStack'
import ComprarStack from './ComprarStack'
import NuevoStack from './NuevoStack'
import FavoritesStack from './FavoritesStack'
import SearchStack from './SearchStack'

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Hamacas'
                tabBarOptions={{
                    inactiveTintColor: '#4C5852',
                    activeTintColor: '#F82604'
                }}
                screenOptions={({route}) => ({
                    tabBarIcon:({color}) =>screenOptions(route, color)
                })}
            >
                <Tab.Screen name='Hamacas' 
                component={HamacasStack}
                options={{title:"Home"}}
                />
                <Tab.Screen name='Account' 
                component={AccountStack}
                options={{title:"Cuenta"}}
                />
                <Tab.Screen name='Comprar' 
                component={ComprarStack}
                options={{title:"Comprar"}}
                />
                <Tab.Screen name='Nuevo' 
                component={NuevoStack}
                options={{title:"Novedades"}}
                />
                <Tab.Screen name='Favorites' 
                component={FavoritesStack}
                options={{title:"Favoritos"}}
                />
                <Tab.Screen name='Search' 
                component={SearchStack}
                options={{title:"Buscar"}}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName
    switch(route.name){
        case 'Hamacas':
            iconName='home-variant'
            break
        case 'Favorites':
            iconName='heart-outline'
            break
        case 'Comprar':
            iconName='shopping'
            break
        case 'Nuevo':
            iconName='new-box'
            break    
        case 'Search':
            iconName='magnify'
            break
        case 'Account':
            iconName='account-circle'
            break
    }
    return(
        <Icon 
            type='material-community' 
            name={iconName} 
            size={22} 
            color={color}/>
    )
}