import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import {firebaseapp} from '../../utils/firebase'
import firebase from 'firebase/app'

export default function Hamacas({navigation}){
     const [user, setUser] = useState(null)

     useEffect(() => {
        firebase.auth().onAuthStateChanged((userInfo)=>{
                setUser(userInfo)
        })
     }, [])

    return(
        <View style={styles.viewBody}>
            <Text>Hamacas</Text>
            {user && (
            <Icon
                reverse
                type='material-community'
                name='plus'
                color='#F82604'
                containerStyle={styles.btnContainer}
                onPress={()=>navigation.navigate('Add-Hamacas')}
            />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        flex: 1,
        backgroundColor: '#fff'
    },
    btnContainer:{
        position: 'absolute',
        bottom: 10,
        right: 10
    }
})