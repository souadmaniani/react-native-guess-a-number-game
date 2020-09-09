import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const StartGameScreen = props => {
    return (
        <View>
            <TextInput {...props} style= {{...styles.input, ...props.style}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default StartGameScreen;