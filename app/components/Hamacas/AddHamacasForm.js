import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import AddHamacas from '../../screens/Hamacas/AddHamacas'
import { onChange } from 'react-native-reanimated'

export default function AddHamacasForm({toastRef, setLoading, navigation}) {
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorName, setErrorName] =useState(null)
    const [errorDescripcion, setErrorDescription] =useState(null)
    const [errorEmail, setErrorEmail] =useState(null)
    const [errorAddress, setErrorAddress] =useState(null)
    const [errorPhone, setErrorPhone] =useState(null)
    


    const addHamacas  = () => {
        console.log(formData)
        console.log('siii')
    }
  return (
    <View style={styles.viewContainer}>
      <FormAdd
        formData={formData}
        setFormData={setFormData}
        errorName={errorName}
        errorDescripcion={errorDescripcion}
        errorEmail={errorEmail}
        errorAddress={errorAddress}
        errorPhone={errorPhone}
      />
      <Button 
        title='Crear negocio'
        onPress={AddHamacas}
        buttonStyle={styles.btnHamacas}
      />
    </View>
  )
}

function FormAdd({formData,setFormData, errorName,errorDescripcion,errorEmail,errorAddress,errorPhone}) {
    const [country, setCountry] = useState("MX")
    const [callingCode, setCallingCode] = useState("52")
    const [phone,setPhone] = useState ("")

    const OnChange = (e, type) => {
        setFormData({...formData, [type] :e.nativeEvent.text})
    }

    return(
        <View styles={styles.viewForm}>
            <Input
                placeholder='Nombre del negocio'
                defaultValue={formData.name}
                onChange={(e) => onChange(e, "name")}
                errorMessage={errorName}
            />
            <Input
                placeholder='Dirección del negocio'
                defaultValue={formData.address}
                onChange={(e) => onChange(e, "address")}
                errorMessage={errorAddress}
            />
            <Input
                keyboardType='email-address'
                placeholder='Email del negocio'
                defaultValue={formData.email}
                onChange={(e) => onChange(e, "email")}
                errorMessage={errorEmail}
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
                defaultValue={formData.phone}
                onChange={(e) => onChange(e, "phone")}
                errorMessage={errorPhone}
                />
                <Input
                placeholder='Descripción del negocio'
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.description}
                onChange={(e) => onChange(e, "description")}
                errorMessage={errorDescripcion}
                />
            </View>
        </View>
    )
}

const defaultFormValues = () => {
    return{
        name: "",
        description: "",
        email:"",
        phone: "",
        address: "",
        country: "MX",
        callingCode: "52"
    }
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