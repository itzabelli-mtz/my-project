import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'
import firebase from 'firebase'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default function InfoUser(props){
    const {userInfo, toastRef} = props
    const {uid, photoURL, displayName, email, } = userInfo
  
    const changeAvatar= async ()=>{
        const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        const resultPermissionsCamera = resultPermissions.permissions.mediaLibrary.status
        if(resultPermissionsCamera === 'denied'){
            toastRef.current.show({
                type: 'info',
                position: 'top',
                text1: 'Permissions',
                text2: 'Es necesario los permisos de la galeria',
                visibilityTime: 3000,
            })
        } else{
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4,3]
            })
            console.log(result)
            if (result.cancelled){
                toastRef.current.show({
                    type: 'info',
                    position: 'top',
                    text1: 'Cancelled',
                    text2: 'No elegiste una imagen de la galeria',
                    visibilityTime: 3000,
                })
            } else {
                uploadImage(result.uri).then(()=> {
                    console.log('imagen dentro de firebase')
                    updatePhotoUrl()
                }).catch(()=>{
                    toastRef.current.show({
                        type: 'error',
                        position: 'top',
                        text1: 'Firebase error',
                        text2: 'Error al actualizar imagen',
                        visibilityTime: 3000,
                    })
                })
            }
        }
    }

const uploadImage = async (uri) => {
    console.log(uri)
    const response = await fetch(uri)
    console.log(JSON.stringify(response))
    const blob = await response.blob()
    console.log(JSON.stringify(blob))
    const ref = firebase.storage().ref().child(`avatar/${uid}`)
    return ref.put(blob)
}

const updatePhotoUrl = () =>{
    firebase.storage().ref(`avatar/${uid}`).getDownloadURL()
    .then(async(response)=>{
        console.log(response)
        const update = { photoURL: response }
        await firebase.auth().currentUser.updateProfile(update)
        console.log('imagen actualizada')
    })
}

return(
    <View style={styles.viewUserInfor}>
        <Avatar
            title='Itza'
            rounded
            size={100}
            onPress={changeAvatar}
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
        flexBasis: 'auto',
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