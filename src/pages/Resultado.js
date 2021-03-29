import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Resultado1 from '../assets/Resultado1.png';
import VectorHome from '../assets/VectorHome.png';

export default function Resultado ({ navigation }) {
    

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonHome}>
                <Image style={styles.vector} source={VectorHome} />
            </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={true}>

            <View>
                <Image style={styles.resultadoIcon} source={Resultado1} />
                <View style={styles.resultadoAlinhamento}>
                    <Text style={styles.resultadoText}>CUIDADO</Text>
                    <Text style={styles.resultadoText}>INTENSIVO</Text>
                </View>
                
            </View>

            <View style={styles.form}>

                <Text style={styles.subTitulo}>RELATÓRIO DO PACIENTE</Text>

                <Text style={styles.text}>A pontuação desse paciente foi de 35, necessitando, portanto, de cuidados intensivos por parte da equipe de enfermagem.</Text>
            </View>
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                        <Text style={styles.buttonText}>
                            VOLTAR
                        </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
    },

    subTitulo: {
        alignSelf: 'center',
        fontSize: 35,
        color: '#000',
        fontWeight:'bold',
        marginBottom: 20,
        marginTop: 20,
        fontWeight: 'bold',
        fontFamily: 'Rubik',
    },
    
    text: {
        fontSize: 18,
        textAlign: 'justify',
        fontFamily: 'Adamina',
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

    header: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
        paddingBottom: 30,
    },

    buttonHome: {
        marginTop: 20,
        alignSelf: 'flex-start',
    },

    footer: {
        marginTop: 20,
    },

    resultadoIcon: {
        alignSelf: 'center',
    },

    resultadoAlinhamento: {
        position: 'absolute',
        alignSelf: 'center',
        paddingVertical: '35%',
    },
    
    resultadoText: {
        color: '#FFF',
        fontSize: 50,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'Rubik',
    },
});