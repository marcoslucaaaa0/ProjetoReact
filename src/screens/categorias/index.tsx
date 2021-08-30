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
      titulo: 'Brasileirão'
    },
    {
      id: '2',
      titulo: 'Copa do Brasil'
    },
    {
      id: '3',
      titulo: 'Libertadores'
    },
    {
      id: '4',
      titulo: 'Champions League'
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
    backgroundColor: '#ffff',
    flex: 1
  }
});