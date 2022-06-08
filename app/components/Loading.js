import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading(props){
    const {isVisible, text} = props
    return(
        <Overlay
            isVisible = {isVisible} 
            windowBackgroundColor = 'rgba(0,0,0,0.5)'
            overlayBackgroundColor = 'transparen'
            overlayStyle = {style.overlay}
        >
            <View>
                <ActivityIndicator size='large' color='#F82604'/>
                {text && <Text style={style.text}>{text} </Text>}
            </View>
        </Overlay>
    )
}

const style = StyleSheet.create({
    overlay:{
        height: 100,
        width: 200,
        backgroundColor: '#fff',
        borderColor: '#F82604',
        borderWidth: 2,
        borderRadius: 10
    },
    text:{
        color:'#F82604',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign:'center'

    }
})