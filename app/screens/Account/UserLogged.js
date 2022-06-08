import React, { useState, useRef, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Toast from 'react-native-toast-message'
import firebase from 'firebase'
import InfoUser from '../../components/Account/InfoUser'

export default function UserLogged(){
    const [userInfo, setUserInfo] = useState(null)
    const toastRef = useRef()
    useEffect(()=>{
        (async()=>{
            const user = await firebase.auth().currentUser
            setUserInfo(user)
        })()
    },[])
    return(
        <View style={style.viewUserInfo}>
            {userInfo&&<InfoUser userInfo={userInfo}/>}
            <Text>AccountOptions...</Text>
            <Button 
            title='Cerrar sesión'
            buttonStyle={style.btnCloseSession}
            titleStyle={style.btnCloseSessionText}
            onPress={()=>firebase.auth().signOut()}
            />
            <Toast ref={toastRef}/>
        </View>
    )
}

const style = StyleSheet.create({
    viewUserInfo:{
        minHeight:'100%',
    },
    btnCloseSession:{
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: '#F82604',
        borderTopColor: '#e3e3e3',
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnCloseSessionText:{
        color: '#fff'
    }
})