import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { ModeloSecao } from '../modelos/secao'
import { Cartao } from './cartao';

export interface SecaoProps {
  secao: ModeloSecao
}

export function Secao(props: SecaoProps) {
  return (

    <View style={estilo.secao}>
      <Text style={estilo.textoRolagem}>{props.secao.titulo}</Text>
      <View style={estilo.conteinerRolagem}>

      <FlatList 
        horizontal
        data={props.secao.cartoes}
        renderItem={dados => (
          <Cartao
            key={dados.item.id}
            estiloProduto={{ marginRight: 10 }}
            cartao={{
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
  secao: {
    height: 333,
    width: '100%',
    paddingLeft: 15,
    borderColor: '#464f41',
    backgroundColor: 'rgba(81, 120, 103, 0.3)',
    marginBottom: 20,
    borderBottomWidth: 0.5,
  },
  conteinerRolagem: {
    marginBottom: 2,
    paddingTop: 8,

  },
  textoRolagem: {
    fontSize: 18,
    color: '#fff',
    paddingTop: 6,
    marginLeft: -15,
    paddingLeft: 22,
    paddingBottom: 6,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#464f41',
    textAlign: 'left',
    backgroundColor: 'rgba(81, 120, 103, 0.5)',
    fontStyle: 'italic'
  }
});