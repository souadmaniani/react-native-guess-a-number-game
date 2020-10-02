import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, Platform }
    from 'react-native';
import Colors from '../constants/Colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;
    if (Platform.Version >= 21)
        ButtonComponent = TouchableNativeFeedback;
    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={{ ...styles.button, ...props.style}}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>

    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans-regular',
        textAlign:'center'
    }
});

export default MainButton;