import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.containerImage}>
                <Image style={styles.image}
                    source={require('../assets/guessNumber.png')}
                    resizeMode='cover'
                />
                {/* <Image style={styles.image} source={{uri:'https://lh3.googleusercontent.com/proxy/Etl2yyLESkRfv-qli4SUXge9ZAdGbewwWQVWyrtbwXit0IO_pqA6OBZESFQnloegtgwCbVEOe_JPby7bQpPoYZcinLCA5dhE22x5WRfVZgzLRQLa3gLgQYRneoF_MmCr6slY5A'}}/> */}
            </View>
            <View style={styles.textContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highLigh}>{props.guessRounds} </Text>
                Rounds to guess the number <Text style={styles.highLigh}>{props.userNumber}</Text>.
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>
                New Game
            </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImage: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 3,
        marginVertical: 20

    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        marginHorizontal: 30,
        marginVertical: 15,

    },
    resultText: {
        fontSize: 20,
        textAlign: 'center'
    },
    highLigh: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary
    }
});

export default GameOverScreen;