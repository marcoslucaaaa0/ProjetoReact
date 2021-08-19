import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export interface CampoUsuarioProps {
    valor?: string
    onChangeText?(texto: string): void
    desabilitado?: boolean
    senha?: boolean
}

export function CampoUsuario(props: CampoUsuarioProps) {
    return (
        <View style={estilo.campo}>
          <Input 
            inputContainerStyle={estilo.inputConteinerStyle} containerStyle={estilo.inputConteiner} 
            value={props.valor} inputStyle={estilo.input} secureTextEntry={props.senha}
            disabled={props.desabilitado} onChangeText={props.onChangeText}
          />
        </View>
    );
}

const estilo = StyleSheet.create({
    inputConteinerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#467378',
      borderRadius: 10,
      height: '100%'
    },
    campo: {
      display: 'flex',
      width: '95%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },
    subtitulo: {
      color: '#2f5d62',
      fontSize: 30,
      marginBottom: 20,
      fontWeight: 'bold'
    },
    input: {
      color: '#fff',
      textAlign: 'center'
    },
    nomeInput: {
      color: '#244245',
      fontSize: 16,
      alignSelf: 'flex-start',
      marginLeft: 15,
      marginBottom: 1,
      fontWeight: 'bold'
    },
    inputConteiner: {
      width: '100%',
      height: 45
    },
    botaoSalvar: {
      borderRadius: 10,
      marginTop: 15,
      backgroundColor: '#af2d2d',
      padding: 11,
      width: 130
    },
    tituloBotao: {
      marginLeft: 5,
      fontSize: 17,
      fontWeight: 'bold',
      color: '#eee'
    }
  });
  