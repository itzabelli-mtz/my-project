import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Input, Button} from 'react-native-elements'
import firebase from 'firebase'

export default function ChangeDisplayNameForm(props){
    const {displayPassword, setShowModal, toastRef, setReloadUserInfo} = props
    const [newDisplayPassword, setNewDisplayPassword] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit=()=>{
        setError(null)
        if(!newDisplayPassword){
            setError('La contraseña no puede quedar vacia')
        } else if (displayPassword === newDisplayPassword){
            setError('La contraseña no debe ser igual a la actual')
        } else{
            setIsLoading(true)
            const update ={
                displayPassword: newDisplayPassword
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
                console.log('error al actualizar la contraseña')
                setIsLoading(false)
            })
        }
    }


    return(
        <View style={styles.view}>
            <Input
                placeholder='Contraseña'
                containerStyle={styles.input}
                rightIcon={{
                    type: 'material-community',
                    name: 'account-circle-outline',
                    color: '#c2c2c2'
                }}
                defaultValue={displayPassword|| ''}
                onChange={(e)=>setNewDisplayPassword(e.nativeEvent.text)}
                errorMessage={error}
            />
            <Button
                title='Cambiar contraseña'
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