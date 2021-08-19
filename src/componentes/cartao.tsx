import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ModeloCartao } from '../modelos/cartao';

export interface CartaoProps {
    cartao: ModeloCartao,
    estiloProduto?: any
}

export function Cartao(props: CartaoProps) {
    const navegacao = useNavigation()
    return (
        <TouchableOpacity onPress={() => navegacao.navigate('detalhes')}>
            <View style={[estilo.produto, props.estiloProduto]}>
                <Image
                    style={estilo.imagemCamisa}
                    source={props.cartao.imagem}
                />

                <View style={estilo.conteinerTituloPreco}>
                    <Text style={estilo.titulo}>{props.cartao.titulo}</Text>
                    <Text style={estilo.preco}>R$ {props.cartao.preco}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    produto: {
        backgroundColor: 'rgba(58,99,81,0.6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 280,
        width: 168,
        borderColor: '#1e6f5c',
        borderWidth: 1,
        marginBottom: 20
    },
    imagemCamisa: {
        height: '60%',
        width: '93%',
        marginTop: 6
    },
    conteinerTituloPreco: {
        width: '100%',
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column'
    },
    titulo: {
        color: '#eee',
        marginRight: 5,
        marginLeft: 5,
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    preco: {
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 8,
        marginRight: 10,
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 5
    }
});