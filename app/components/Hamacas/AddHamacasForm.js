import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import AddHamacas from '../../screens/Hamacas/AddHamacas'

export default function AddHamacasForm({toastRef, setLoading, navigation}) {
    const addHamacas  = () => {
        console.log('siii')
    }
  return (
    <View style={styles.viewContainer}>
      <FormAdd/>
      <Button 
        title='Crear negocio'
        onPress={AddHamacas}
        buttonStyle={styles.btnHamacas}
      />
    </View>
  )
}

function FormAdd() {
    const [country, setCountry] = useState("MX")
    const [callingCode, setCallingCode] = useState("52")
    const [phone,setPhone] = useState ("")

    return(
        <View styles={styles.viewForm}>
            <Input
                placeholder='Nombre del negocio'
            />
            <Input
                placeholder='Dirección del negocio'
            />
            <Input
                keyboardType='email-address'
                placeholder='Email del negocio'
            />
            <View styles={styles.phoneView}>
                <CountryPicker
                    withFlag
                    withCallingCode
                    withFilter
                    withCallingCodeButton
                    containerStyle={styles.countryPicker}
                    countryCode={country}
                    onSelect={(country)=> {
                        setCountry(country.cca2)
                        setCallingCode(country.callingCode[0])
                    }}
                />
                <Input
                placeholder='WhatsApp del negocio'
                keyboardType='phone-pad'
                containerStyle={styles.inputPhone}
                />
                <Input
                placeholder='Descripción del negocio'
                multiline
                containerStyle={styles.textArea}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        height:'100%'
    },
    viewForm:{
        marginHorizontal: 10
    },
    textArea:{
        height:100,
        width:'100%'
    },
    phoneView:{
        width:'80%',
        flexDirection: "row",
    },
    inputPhone:{
        width: '100%',
    },
    btnHamacas: {
        margin: 20,
        backgroundColor: '#F82604'
    }
})