import React from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native';

import homeImage from '../assets/homeImage.png';

export default function Home ({ navigation }) {

    

    

    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior='padding' style={styles.container}>
            

            <View style={styles.form}>
                <Text style={styles.titulo}> CLASSIFICADOR DE PACIENTES </Text>

                <Image style={styles.icone} source={homeImage}/>

                <TouchableOpacity onPress={() => navigation.navigate('Pagina1')}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        CALCULAR
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Help')} style={styles.button}>
                    <Text style={styles.buttonText}>
                        SAIBA MAIS
                    </Text>
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icone:{ 
        width: 349,
        height: 344,
    },

    titulo: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#3C8F7C',
        fontFamily: 'Rubik',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    button: {
        marginBottom: 20,
        width: 200,
        height: 43,
        backgroundColor: '#C8ECE8',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Rubik',
    },

});