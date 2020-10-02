import React, { useState, useEffect } from 'react';
import {
    View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard,
    Alert, Dimensions, ScrollView, KeyboardAvoidingView
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        }
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    })

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHandler = () => {
        setEnteredValue('');
    };

    const ConfirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText style={{fontSize: 20}}> You selected: </BodyText>
                <NumberContainer> {selectedNumber} </NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)}>
                    START GAME
                </MainButton>
            </Card>
        );
    }
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start A New Game!</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText style={{fontSize: 20}}>Select A Number</BodyText>
                            <Input style={styles.input}
                                blurOnSubmit autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='number-pad'
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                                fontSize={18}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={{ width: buttonWidth }}>
                                    <MainButton onPress={resetInputHandler} style={{backgroundColor:Colors.second}}>
                                        <Text style={styles.buttonText} >Reset</Text>
                                    </MainButton>
                                </View>
                                <View style={{ width: buttonWidth }}>
                                    <MainButton onPress={ConfirmInputHandler} >
                                       <Text style={styles.buttonText}>Confirm</Text> 
                                    </MainButton>
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView >

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 22,
        marginVertical: 18,
        fontFamily: 'nunito-black',
        color:Colors.second
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: "center"
    },
    buttonContainer: {
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%'
    },
    // button: {
    //     width: Dimensions.get('window').width / 4
    // },
    input: {
        width: 50,
        textAlign: "center",
        marginBottom: 20
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'

    },
    buttonText:{
        // fontSize: 14,
        fontFamily:'nunito-regular'
    }
});

export default StartGameScreen;