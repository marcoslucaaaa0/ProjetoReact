import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { ModeloCarrinho } from '../../../modelos/modeloCarrinho';

export interface MolduraProps {
    modeloCarrinho: ModeloCarrinho
}

export function Moldura (props: MolduraProps) {
    return (
        <View style={estilo.produto}>
        <View style={estilo.conteinerImagem}>
            <Image style={estilo.imagemProduto}
                source={props.modeloCarrinho.imagem} />
        </View>

        <View style={estilo.detalhesProduto}>
            <Text style={estilo.tituloProduto}>{props.modeloCarrinho.titulo}</Text>

            <View style={estilo.conteinerResumoDescricao}>
                <Text style={estilo.resumoDescricao}>{props.modeloCarrinho.resumo}</Text>
            </View>

            <View style={estilo.conteinerPrecoQuantidade}>
                <Text style={estilo.textoPreco}>R$ {props.modeloCarrinho.preco}</Text>

                <View>
                    <Text style={estilo.textoQuantidade} >QUANTIDADE</Text>
                    <View style={estilo.quantidadeProduto}>
                        <TouchableOpacity>
                            <AntDesign name='minuscircle' size={16} color='#eee' />
                        </TouchableOpacity>

                        <Text style={estilo.numeroQuantidade}>{props.modeloCarrinho.quantidade}</Text>

                        <TouchableOpacity>
                            <AntDesign name='pluscircle' size={17} color='#eee' />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    </View>

    );
}

const estilo = StyleSheet.create({
    resumoDescricao: {
        color: 'rgba(255, 255, 255, 0.92)'
    },
    conteinerResumoDescricao: {
        width: 200
    },
    produto: {
        backgroundColor: 'rgba(58,99,81,0.6)',
        height: 170,
        width: '95%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
        borderColor: '#1e6f5c',
        borderWidth: 1
    },
    tituloProduto: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15
    },
    botaoRemover: {
        position: 'absolute',
        top: -6,
        right: -11
    },
    textoPreco: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    conteinerImagem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -13,
        marginLeft: -10
    },
    imagemProduto: {
        height: 145,
        width: 120
    },
    detalhesProduto: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    quantidadeProduto: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    textoQuantidade: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        marginRight: 3
    },
    numeroQuantidade: {
        color: '#fff',
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 15,
        fontWeight: 'bold'
    },
    conteinerPrecoQuantidade: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
        marginRight: -15
    },
    finalizarCompra: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#dfdfdf',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 11,
        paddingTop: 11
    },
    textoValorTotal: {
        color: '#222831',
        fontSize: 23,
        fontWeight: 'bold'
    },
    botaoComprar: {
        borderRadius: 20,
        backgroundColor: '#af2d2d',
        padding: 15
    }
});