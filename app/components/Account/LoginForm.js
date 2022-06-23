import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validation'
import firebase from 'firebase'
import {useNavigation} from '@react-navigation/native'
import Loading from '../../components/Loading'

export default function LoginForm(props){
    const {toastRef} = props
    const [showPassword, setshowPassword] = useState(false)
    const [ formData, setFormadata ]= useState(defaultFormValues())
    const navigation = useNavigation()

    const onSubmit= () => {
        if(formData.email.length===0||formData.password.length===0){
            toastRef.current.show({ 
                type: 'info',
                position: 'bottom',
                text1: 'Aviso',
                text2: 'Todos los campos deben llenarse',
                visibilityTime: 3000,
            })
    }else if (!validateEmail(formData.email)){
        toastRef.current.show({ 
            type: 'error',
            position: 'bottom',
            text1: 'Contraseña',
            text2: 'El correo no es correcto',
            visibilityTime: 3000,
        })
        } else{
            firebase.auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then(()=>{
                navigation.navigate('Account')
            })
            .catch(()=>{
                toastRef.current.show({
                    type:'error',
                    position: 'top',
                    text1: 'Cuenta',
                    text2: 'El contraseña no es correcta',
                    visibilityTime: 3000,
            })
        })
    }
}    

    const onChange = (e, type) => {
        setFormadata({ ...formData, [type]: e.nativeEvent.text })
    }

    return(
        <View style={styles.formContainer}>
        <Input
            placeholder='Correo electronico'
            containerStyle={styles.inputForm}
            onChange={(e)=>onChange(e,'email')}
            rightIcon={<Icon type='material-community' name='at' inconStyle={styles.iconRigth}/>}
        />  
        <Input
            placeholder='Contraseña'
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={showPassword ? false : true}
            onChange={(e)=>onChange(e, 'password')}
            rightIcon={
                <Icon
                    type='material-community'
                    name={ showPassword ? "eye-off" : "eye"}
                    iconStyle={styles.iconRigth}
                    onPress={()=>setshowPassword(!showPassword)}
                />
            }
        />  
        <Button
                title='Iniciar Sesión'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            /> 
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        password: '',
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        marginTop: 30
    },
    inputForm:{
            width: '100%',
    },
    btnContainerRegister:{
        marginTop: 10,
        width: '95%'
    },
    btnRegister:{
        backgroundColor:'#F82604'
    },
    iconRigth:{
        color: '#646464'
    }
})