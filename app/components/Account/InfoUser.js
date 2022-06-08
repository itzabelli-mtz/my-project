import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'

export default function InfoUser(props){
    const {userInfo} = props
    const {photoURL, displayName, email} = userInfo
    console.log(photoURL)
    console.log(displayName)
    console.log(email)
    return(
        <View style={styles.viewUserInfor}>
            <Avatar
                title='Itza'
                rounded
                size={100}
                containerStyle={styles.userInfoAvatar}
                source={
                    photoURL ? {uri:photoURL} : require('../../../assets/imagen/avatar-default.jpg')
                }
            />
            <View>
                <Text style={styles.displayName}>
                    {displayName ? displayName : 'Invitado'}
                </Text>
                <Text>{email ? email : 'Entrada por SSO'} </Text>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfor:{
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 'row',
        paddingTop: 30,
        paddingBottom: 30
    },
    userInfoAvatar:{
        marginTop:20,
        backgroundColor: '#F82604'
    },
    displayName:{
        fontWeight: 'bold',
        paddingBottom: 5,
        textAlign: 'center'
    }
})