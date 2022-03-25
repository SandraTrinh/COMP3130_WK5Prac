import React from 'react';

import { StyleSheet, TextInput } from 'react-native';

function AppTextInput({style, ...otherProps}) {
    return (
       <TextInput style={[styles.container, style]} {...otherProps}/>
    );
}

const styles = StyleSheet.create({
    container:{
        color:'#000',
        borderColor: '#000',
        height: 50,
        width: 200,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginTop:10,
    }
})

export default AppTextInput;