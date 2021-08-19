import { useNavigation, useRoute } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Cartao } from '../../componentes/cartao';
import { Ionicons } from '@expo/vector-icons'

export interface CategoriaScreenProps {
}

export function CategoriaScreen(props: CategoriaScreenProps) {

    const navegacao = useNavigation()
    const route = useRoute()
    //@ts-ignore
    const titulo = route.params?.titulo

    return (
        <View style={estilo.fundo}>
            <StatusBar />

            <View style={estilo.cabecalho}>
                <TouchableOpacity onPress={() => navegacao.goBack()}>
                    <Ionicons name='arrow-back' size={22} color='#fff' />
                </TouchableOpacity>
                <Text style={estilo.titulo}>{titulo}</Text>
            </View>

            <ScrollView>
                <View style={estilo.conteinerProdutos}>

                    <Cartao
                        cartao={{
                            imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
                            titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
                            preco: 299.88
                        }}
                    />
                    <Cartao
                        cartao={{
                            imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
                            titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
                            preco: 299.99
                        }}
                    />

                </View>
            </ScrollView>

        </View>
    );
}

const estilo = StyleSheet.create({
    fundo: {
        backgroundColor: '#9fb8ad',
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'rgba(58,99,81,0.6)',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    titulo: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    conteinerProdutos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        flexWrap: 'wrap'
    }
});