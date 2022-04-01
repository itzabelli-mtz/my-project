import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Login(){
    return(
        <ScrollView>
            <Image
                source={require('../../../assets/imagen/Picsart_22-02-28_13-14-09-290.png')}
                resizeMode='contain'
                style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <Text>Login Form</Text>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
        </ScrollView>
    )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style = {styles.textRegister}>
            ¿Aún no te has registrado? {' '}
            <Text
                style = {styles.linkRegister}
                onPress={()=>navigation.navigate('register')}
            >
                Registrarse
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: '100%',
        height: 150,
        marginTop: 20 
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40,
        textAlign:'center'
    },
    divider:{
        backgroundColor:'#F82604',
        margin: 40
    },
    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    linkRegister:{
        color: '#F82604',
        fontWeight: 'bold'
    }
})