import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { ModeloCategoria } from '../../modelos/categoria';
import { Categoria } from './componentes/categoria';

export interface CategoriasScreeenProps {
}

export function CategoriasScreeen(props: CategoriasScreeenProps) {
  const navegacao = useNavigation()

  const categorias: ModeloCategoria[] = [
    {
      id: '1',
      titulo: 'Camisas retrô'
    },
    {
      id: '2',
      titulo: 'Camisas masculinas'
    },
    {
      id: '3',
      titulo: 'Camisas femininas'
    },
    {
      id: '4',
      titulo: 'Times brasileiros'
    },
    {
      id: '5',
      titulo: 'Seleções'
    },
    {
      id: '6',
      titulo: 'Times europeus'
    },
  ]

  return (
    <View style={estilo.fundo}>
      <StatusBar />

      <FlatList 
        data={categorias}
        renderItem={dados => (
          <Categoria key={dados.item.id} categoria={dados.item} />
        )}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#9fb8ad',
    flex: 1
  }
});