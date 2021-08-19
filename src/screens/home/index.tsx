import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Cartao } from '../../componentes/cartao';
import { Secao } from '../../componentes/secao';

export interface HomeScreenProps {
}

export function HomeScreen(props: HomeScreenProps) {
  const cartoes = [
    {
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88,
      id: '1'
    },
    {
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88,
      id: '2'
    },
    {
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88,
      id: '3'
    },
    {
      imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
      titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
      preco: 299.88,
      id: '4'
    },
  ]
  
  return (
    <View style={estilo.fundo}>
      <StatusBar />

      <View style={estilo.conteiner}>
        <ScrollView>
          <View style={estilo.cabecalho}>
            <ImageBackground
              source={require('./../../assets/imagens/FUTSEMPRE.png')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>

          <Secao key='1' secao={{titulo: 'Lançamentos', cartoes: cartoes, id: '1'}} />
          <Secao key='2' secao={{titulo: 'Mais vendidas', cartoes: cartoes, id: '1'}} />
          
        </ScrollView>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#9fb8ad',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cabecalho: {
    width: '100%',
    height: 65,
    backgroundColor: '#517867',
    marginBottom: 20
  },
  conteiner: {
    width: '100%'
  }
});