import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'
import { Cartao } from '../../componentes/cartao';
import { ModeloCartao } from '../../modelos/cartao';

export interface PesquisaScreenProps {

}

export function PesquisaScreen(props: PesquisaScreenProps) {

  const resultados: ModeloCartao[] = [
    {
      id: '1',
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88
    },
    {
      id: '2',
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88
    },
    {
      id: '3',
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88
    },
    {
      id: '4',
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88
    },
    {
      id: '5',
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88
    },
    {
      id: '6',
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88
    },
  ]

  return (
    <View style={estilo.fundo}>
      <StatusBar />

      <Input
        inputContainerStyle={estilo.conteinerInput}
        placeholder='Pesquisar camisa'
        inputStyle={estilo.input}
        rightIcon={() => <FontAwesome name='search' size={20} color='black' />}
      />
      
      <View style={estilo.conteinerProdutos}>
        <FlatList 
          numColumns={2}
          data={resultados}
          renderItem={dados => (
            <Cartao
              estiloProduto={{marginRight: 20}}
              cartao={{
                id: dados.item.id,
                imagem: dados.item.imagem,
                titulo: dados.item.titulo,
                preco: dados.item.preco
              }}
            />
          )}
        />
      </View>

    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#9fb8ad',
    flex: 1
  },
  conteinerInput: {
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0,
    paddingRight: 20,
    paddingLeft: 25,
    marginBottom: -10
  },
  input: {
    fontSize: 15
  },
  conteinerProdutos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  }
});