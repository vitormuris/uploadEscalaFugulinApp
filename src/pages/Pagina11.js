import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import VectorHome from '../assets/VectorHome.png';

export default function Pagina11 ({ navigation }) {

    function alerta (){
        Alert.alert('DAORA');
    };
    

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonHome}>
                <Image style={styles.vector} source={VectorHome} />
            </TouchableOpacity>
            
                <Text style={styles.indice}>7</Text>
                <Text style={styles.indice}>8</Text> 
                <Text style={styles.indice}>9</Text> 
                <Text style={styles.indice}>10</Text>
                <Text style={styles.indiceActive}>11</Text>
                <Text style={styles.indice}>12</Text>
            
        </View>

        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.form}>

                <Text style={styles.formTitulo}>CURATIVO</Text>

                <Text style={styles.text}>Assinale a alternativa correspondente
                    ao estado atual do paciente:
                </Text>

                <Text onPress={alerta} style={styles.answers}><Text style={styles.numIndicador}>1.</Text> Sem curativo ou
limpeza da
ferida/incisão cirúrgica.</Text>
                <Text onPress={alerta} style={styles.answers}><Text style={styles.numIndicador}>2.</Text> Curativo realizado 1 vez ao dia pela equipe de
enfermagem.</Text>
                <Text onPress={alerta} style={styles.answers}><Text style={styles.numIndicador}>3.</Text> Curativo realizado 2
vezes ao dia pela equipe de enfermagem.</Text>
                <Text onPress={alerta} style={styles.answers}><Text style={styles.numIndicador}>4.</Text> Curativo realizado 3 vezes
ao dia ou mais pela equipe
de enfermagem.</Text>


            </View>
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Pagina12')} style={styles.button}>
                        <Text style={styles.buttonText}>
                            PRÓXIMO
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

    formTitulo: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#3C8F7C',
        marginTop: 40,
        marginBottom: 40,
        fontFamily: 'Rubik',
    },

    text: {
        fontSize: 25,
        textAlign: 'justify',
        fontWeight: '400',
        fontFamily: 'Rubik',
    },

    answers: {
        fontSize: 25,
        textAlign: 'justify',
        fontWeight: '400',
        borderRadius: 8,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        fontFamily: 'Rubik',
    },

    numIndicador: {
        fontSize: 25,
        color: '#A9A9A9',
        fontFamily: 'Rubik',
    },  
   

    vector: {
        marginTop: 20,
        alignSelf: 'flex-start',
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
    },

    header: {
        height: 90,
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 25,
        paddingBottom: 30,
        borderBottomColor: '#C8ECE8',
        borderBottomWidth: 2,
    },


    indice: {
        width: 40,
        height: 40,
        borderColor: '#A9A9A9',
        borderWidth: 1,
        fontSize: 30,
        color: '#A9A9A9',
        marginTop: 35,
        marginRight: 15,
        borderRadius: 20,
        textAlign: 'center',
        paddingTop: 2,
       
    },

    indiceActive: {
        width: 40,
        height: 40,
        backgroundColor: '#C8ECE8', 
        fontSize: 30,
        color: '#FFFF',
        marginTop: 35,
        marginRight: 15,
        borderRadius: 20,
        textAlign: 'center',
       paddingTop: 2,
    },

    buttonHome: {
        marginTop: 20,
        alignSelf: 'flex-start',
        marginRight: 20,
    },
    footer: {
        marginTop: 20,
    }
    

});