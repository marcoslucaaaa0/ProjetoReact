import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ModeloProduto } from '../../modelos/produto';

export interface ProdutoScreenProps {
}

export function ProdutoScreen(props: ProdutoScreenProps) {
    let produto: ModeloProduto = {
        imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
        titulo: 'Camisa Principal Do São Paulo 2021',
        maisImagens: [
            require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1-costas.jpg'),
            require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1-zoom.jpg'),
            require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1-cor.jpg')
        ]
    }

    const [carrinho, setCarrinho] = React.useState<boolean>(false)
    const navegacao = useNavigation()

    return (
        <ScrollView style={estilo.fundo}>
            <StatusBar />

            <View style={estilo.cabecalho}>
                <TouchableOpacity onPress={() => navegacao.goBack()}>
                    <Ionicons name='arrow-back' size={24} color='#fff' />
                </TouchableOpacity>
                <Text style={estilo.textoCabecalho}>Detalhes do produto</Text>
            </View>

            <View style={estilo.conteinerProduto}>
                <Text style={estilo.titulo}>{produto.titulo}</Text>
                <View style={estilo.conteinerImagens}>
                    <ImageBackground source={produto.imagem} style={estilo.imagemPrincipal} />
                    <View style={estilo.conteinerBotoesPreco}>
                        {!carrinho && <Button title='Carrinho' buttonStyle={[estilo.botoes, { backgroundColor: '#3d5585' }]} onPress={() => setCarrinho(true)} />}
                        {carrinho && <Button title='Remover' buttonStyle={[estilo.botoes, { backgroundColor: '#3d5585' }]} onPress={() => setCarrinho(false)} />}
                        <Button title='Camprar' buttonStyle={[estilo.botoes, { backgroundColor: '#ad2f4e' }]} onPress={() => navegacao.navigate('app', {screen: 'carrinho'})}  />
                        <Text style={estilo.preco}>R$ 300,00</Text>
                    </View>
                </View>
                
                <Text style={estilo.descricao}>De São Paulo tens o nome! Há 30 anos, Tele Santana comemorava seu primeiro título comandando o Tricolor.
                Homenageando esse marco que depois se tornaria uma jornada de títulos e glórias, a Adidas lança a Camisa São
                Paulo Masculina para a temporada 21/22. Semelhante ao manto que os craques usam nas partidas, o modelo é produzido
                com tecido leve e respirável predominantemente branco com as listras tricolores tradicionais. O escudo do amado clube
                          brasileiro aparece bordado na altura do peito e deixa evidente sua torcida dentro e fora dos estádios.</Text>

                <Text style={estilo.textoMaisImagens}>Mais Imagens</Text>
                <ScrollView horizontal style={estilo.maisImagens}>
                    {produto.maisImagens?.map((img, i) => (
                        <Image source={img} style={estilo.imagemSecundaria} key={i} />
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    fundo: {
        backgroundColor: '#ddd',
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'rgba(58,99,81,0.6)',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoCabecalho: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    conteinerProduto: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#444',
        marginLeft: 15,
        marginRight: 15,
    },
    conteinerImagens: {
        width: '100%',
        marginTop: 10,
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    imagemPrincipal: {
        height: 220,
        width: 200,
    },
    conteinerImagensSecundarias: {
        height: 220,
        width: 70,
        backgroundColor: 'red',
        marginLeft: 40
    },
    imagemSecundaria: {
        height: 170,
        width: 150,
        marginLeft: 10
    },
    conteinerBotoesPreco: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        marginLeft: 5
    },
    botoes: {
        height: 50,
        marginTop: 10,
        width: 140
    },
    preco: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: -25,
        marginTop: 35,
        fontSize: 20
    },
    descricao: {
        color: '#444',
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        paddingTop: 10,
        borderColor: '#000',
        borderTopWidth: 1,
    },
    textoMaisImagens: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    },
    maisImagens: {
        borderColor: '#000',
        borderTopWidth: 1,
        width: '90%',
        paddingTop: 15,
        marginBottom: 20
    }
});