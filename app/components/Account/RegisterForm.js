import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validation'
import firebase from 'firebase'
import {useNavigation} from '@react-navigation/native'


export default function RegisterForm(props){
    const {toastRef} = props
    const [showPassword, setshowPassword] = useState(false)
    const [showRepeatPassword, setshowRepeatPassword] = useState(false)
    const [ formData, setFormadata ]= useState(defaultFormValues())
    const navigation = useNavigation()

    const onSubmit = () => {
        if(formData.email.length===0||formData.password.length===0||formData.repeatPassword.length===0){
            toastRef.current.show({ 
                type: 'info',
                position: 'bottom',
                text1: 'Aviso',
                text2: 'Todos los campos deben llenarse',
                visibilityTime: 3000,
            })
        } else if (!validateEmail(formData.email)){
            //console.log('El corrreo no es correcto')
            toastRef.current.show({ 
                type: 'error',
                position: 'bottom',
                text1: 'Alerta',
                text2: 'El correo no es correcto',
                visibilityTime: 3000,
            })
        } else if (formData.password !== formData.repeatPassword){
            //console.log('Las contraseñas deben ser idénticas')
            toastRef.current.show({ 
                type: 'error',
                position: 'bottom',
                text1: 'Alerta',
                text2: 'Las contraseñas deben ser idénticas',
                visibilityTime: 3000,
            })
        }else if (formData.password.length <6){
            //console.log('La contraseña debe tener mínimo 6 caracteres')
            toastRef.current.show({ 
                type: 'error',
                position: 'bottom',
                text1: 'Alerta',
                text2: 'Las contraseñas deben tener mínimo 6 caracteres',
                visibilityTime: 3000,
            })
        } else {
            firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password).then((response)=>{
                navigation.navigate('Account')
            })
            .catch(()=>{
                toastRef.current.show({ 
                    type: 'error',
                    position: 'top',
                    text1: 'Aviso',
                    text2: 'Este correo ya ha sido registrado',
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
        <Input
            placeholder='Repetir contraseña'
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={showRepeatPassword ? false : true}
            onChange={(e)=>onChange(e, 'repeatPassword')}
            rightIcon={
                <Icon
                    type='material-community'
                    name={ showRepeatPassword ? "eye-off" : "eye"}
                    iconStyle={styles.iconRigth}
                    onPress={()=>setshowRepeatPassword(!showRepeatPassword)}
                />
            }
        />
        <Button
                title='Registrate'
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
        repeatPassword: ''
    }
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 20
    },
    inputForm:{
        width: '100%',
        marginTop: 10
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