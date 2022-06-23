import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Input, Button} from 'react-native-elements'
import firebase from 'firebase'

export default function ChangeDisplayNameForm(props){
    const {displayEmail, setShowModal, toastRef, setReloadUserInfo} = props
    const [newDisplayEmail, setNewDisplayEmail] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit=()=>{
        setError(null)
        if(!newDisplayEmail){
            setError('El correo no puede estar vacio')
        } else if (displayEmail === newDisplayEmail){
            setError('El correo no puede ser igual al actual')
        } else{
            setIsLoading(true)
            const update ={
                displayEmail: newDisplayEmail
            }
            firebase
            .auth()
            .currentUser.updateProfile(update)
            .then(()=>{
                console.log('Perfecto firebase')
                setIsLoading(false)
                setReloadUserInfo(true)
                setShowModal(false)
            })
            .catch(()=>{
                console.log('error al actualizar el correo')
                setIsLoading(false)
            })
        }
    }


    return(
        <View style={styles.view}>
            <Input
                placeholder='Email'
                containerStyle={styles.input}
                rightIcon={{
                    type: 'material-community',
                    name: 'account-circle-outline',
                    color: '#c2c2c2'
                }}
                defaultValue={displayEmail|| ''}
                onChange={(e)=>setNewDisplayEmail(e.nativeEvent.text)}
                errorMessage={error}
            />
            <Button
                title='Cambiar correo'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                loading={isLoading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        width: '150%'
    },
    view:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 50,
    },
    btnContainer:{
        marginTop: 10,
        width: '100%'
    },
    btn:{
        backgroundColor: '#F82604'
    }
})