import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModeloCategoria } from '../../../modelos/categoria';
import { useNavigation } from '@react-navigation/core';

export interface CategoriaProps {
  categoria: ModeloCategoria
}

export function Categoria(props: CategoriaProps) {
  const navegacao = useNavigation()
  return (
    <TouchableOpacity onPress={() => navegacao.navigate('categoria', {titulo: props.categoria.titulo})}>
      <View style={estilo.opcao}>
        <Text style={estilo.textoCategoria}>{props.categoria.titulo}</Text>
        <Entypo name='chevron-right' size={20} />
      </View>
    </TouchableOpacity>
  );
}

const estilo = StyleSheet.create({
  opcao: {
    backgroundColor: '#fff',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    borderBottomColor: '#184d47',
    borderBottomWidth: 1
  },
  textoCategoria: {
    color: '#3f3f44',
    fontSize: 18
  }
});