import * as React from 'react';
import { StyleSheet } from 'react-native';


export const estilo = StyleSheet.create({
    fundo: {
        width: '100%',
        height: '100%'
    },
    logo: {
        height: 50,
        width: 230
    },
    conteiner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formulario: {
        marginTop: 30
    },
    botao: {
        borderRadius: 20,
        backgroundColor: '#af2d2d',
        padding: 10,
        marginTop: 10
    },
    linkNavegacao: {
        color: '#a4ebf3',
        textAlign: 'center',
        marginTop: 4,
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        padding: 4
    },
    mensagemValidacao: {
        color: '#d9adad',
        textAlign: 'right',
        marginTop: -25,
        marginRight: 12,
        marginBottom: 5,
        fontSize: 15
    },
    check: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    textoCheck: {
        color: '#FFF',
        fontSize: 15,
    },
    mensagemErroLogin: {
        color: '#d9adad',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 5,
        fontSize: 15
    }
});