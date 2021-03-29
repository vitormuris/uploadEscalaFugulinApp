import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import Vector from '../assets/Vector.png';
import Vector1 from '../assets/Vector1.png';
import Vector2 from '../assets/Vector2.png';
import Vector3 from '../assets/Vector3.png';
import Vector4 from '../assets/Vector4.png';
import VectorHome from '../assets/VectorHome.png';

export default function Help ({ navigation }) {
    

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonHome}>
                <Image style={styles.vector} source={VectorHome} />
            </TouchableOpacity>
            <Text style={styles.titulo}>A ESCALA FUGULIN</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.form}>

                <Text style={styles.subTitulo}>O QUE É</Text>

                <Text style={styles.text}>  A escala de Fugulin têm por objetivo principal ser o instrumento para 
                estimar as necessidades diárias dos pacientes em relação à assistência de enfermagem.</Text>

                <Text style={styles.text}>  Elaborada em 1994 pela enfermeira brasileira Fernanda Maria Togeiro Fugulin, 
                    a qual dá nome a escala, inclui doze importantes fatores. Cada um deles possui 
                    de um a quatro pontos dependendo o estado do paciente analisado. Classificando 
                    assim, suas necessidades de acordo com a pontuação atingida na escala.
                </Text>

                <Text style={styles.subTitulo}>O QUE SIGNIFICA </Text>

                <Text style={styles.text}>  Quanto menor a pontuação, significa uma menor necessidade de cuidados. 
                    Quanto maior a pontuação, maior a necessidade desses cuidados. Sendo eles, 
                    então: intensivo, semi-intensivo, alta dependência, intermediário ou mínimo.
                </Text>
            </View>


            <View style={styles.estadoPaciente}>
                <Image style={styles.vector} source={Vector} />

                <Text style={styles.vectorText}> CUIDADO INTENSIVO (≥34) </Text>

            </View>

            <View style={styles.estadoPaciente}>
                <Image style={styles.vector} source={Vector1} />

                <Text style={styles.vectorText}> CUIDADO SEMI-INTENSIVO (30 - 34) </Text>

            </View>

            <View style={styles.estadoPaciente}>
                <Image style={styles.vector} source={Vector2} />

                <Text style={styles.vectorText}> ALTA DEPENDENCIA (24 - 29) </Text>

            </View>

            <View style={styles.estadoPaciente}>
                <Image style={styles.vector} source={Vector3} />

                <Text style={styles.vectorText}> CUIDADO INTERMEDIÁRIO (18 - 23) </Text>

            </View>

            <View style={styles.estadoPaciente}>
                <Image style={styles.vector} source={Vector4} />

                <Text style={styles.vectorText}> CUIDADO MÍNIMO (12 - 17) </Text>

            </View>

            <View style={styles.form}>

                <Text style={styles.subTitulo}>COMO FAZER </Text>

                <Text style={styles.text}>  Primeiramente, os profissionais devem fazem o 
                acompanhamento e preenchimento da escala em todos os turnos: matutino, vespertino 
                e também noturno.</Text>

                <Text style={styles.text}>  Dessa forma, de acordo com a observação dos fatores: estado 
                mental, oxigenação, sinais vitais, motilidade, deambulação, alimentação, cuidado corporal, 
                eliminação, terapêutica, integridade da pele, curativos e o tempo para sua realização, é 
                possível concluir o nível de necessidade dos serviços. Estes fatores são então subdivididos 
                em quatro alternativas, cada uma com seu grau de gravidade correspondente, e consequentemente, 
                sua soma define a classificação do nível de cuidados requeridos.
                </Text>

                <Text style={styles.subTitulo}>MAIS BENEFÍCIOS </Text>

                <Text style={styles.text}>  Ainda assim, dentro de um setor hospitalar, é importante utilizá-la 
                também para avaliar de forma contínua a carga de trabalho da equipe. Utilizando com o melhor 
                aproveitamento possível os conhecimentos e instrumentos que lhe permitam realizar um melhor 
                planejamento, alocação, distribuição e controle dos profissionais de enfermagem.
                </Text>
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
        fontSize: 25,
        color: '#000',
        fontWeight:'bold',
        marginBottom: 20,
        marginTop: 20,
        fontFamily: 'Rubik',
    },

    text: {
        fontSize: 18,
        lineHeight: 19,
        textAlign: 'justify',
        fontFamily: 'Rubik',
    },

    estadoPaciente: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingHorizontal: 30,
    },

    vector: {
        marginTop: 20,
        alignSelf: 'flex-start',
    },

    vectorText:{
        marginTop: 27,
        marginLeft: 15,
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Rubik',
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

    titulo: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#3C8F7C',
        marginTop: 40,
        marginLeft: '19%',
        fontFamily: 'Rubik',

    },

    buttonHome: {
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    footer: {
        marginTop: 20,
    }
    

});