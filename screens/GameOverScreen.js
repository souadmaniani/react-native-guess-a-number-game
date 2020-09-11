import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions }
    from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={{
                    width: availableDeviceWidth * 0.7,
                    height: availableDeviceWidth * 0.7,
                    borderRadius: availableDeviceWidth * 0.7 / 2,
                    marginVertical: availableDeviceHeight / 30,
                    overflow: 'hidden',
                    borderColor: 'black',
                    borderWidth: 3
                }}>
                    <Image style={styles.image}
                        source={require('../assets/guessNumber.png')}
                        resizeMode='cover'
                    />
                    {/* <Image style={styles.image} source={{uri:'https://lh3.googleusercontent.com/proxy/Etl2yyLESkRfv-qli4SUXge9ZAdGbewwWQVWyrtbwXit0IO_pqA6OBZESFQnloegtgwCbVEOe_JPby7bQpPoYZcinLCA5dhE22x5WRfVZgzLRQLa3gLgQYRneoF_MmCr6slY5A'}}/> */}
                </View>
                <View style={{
                    marginHorizontal: 30,
                    marginVertical: availableDeviceHeight / 60
                }}>
                    <BodyText style={{
                        fontSize: availableDeviceHeight < 400 ? 16 : 20,
                        textAlign: 'center'
                    }}>
                        Your phone needed <Text style={styles.highLigh}>{props.guessRounds} </Text>
                Rounds to guess the number <Text style={styles.highLigh}>{props.userNumber}</Text>.
                </BodyText>
                </View>
                <MainButton onPress={props.onRestart} >
                    New Game
            </MainButton>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highLigh: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary
    }
});

export default GameOverScreen;