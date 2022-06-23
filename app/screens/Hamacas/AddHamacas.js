import React,{useRef, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddHamacasForm from '../../components/Hamacas/AddHamacasForm'
import Toast from 'react-native-toast-message'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Loading from '../../components/Loading'

export default function AddHamacas({navigation}) {
    const toastRef = useRef()
    const[loading, setLoading] = useState(false)

  return (
    <KeyboardAwareScrollView>
      <AddHamacasForm toastRef={toastRef} setLoading={setLoading} navigation={navigation}/>
      <Loading isVisible={loading} text="Creando"/>
      <Toast ref={toastRef} position='center' opacity={0.9}/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({})