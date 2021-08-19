import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements'

export interface CampoInputProps {
    placeholder: string
    iconeEsquerda: string
    tipoIcone?: string
    tipoTeclado?: ('numeric' | 'default' | 'email-address')
    onChangeText?(texto: string): void
    onBlur?(): void
}

export function CampoInput(props: CampoInputProps) {
    return (
        <View>
            <Input placeholder={props.placeholder}
                placeholderTextColor='#FFF'
                onChangeText={props.onChangeText}
                inputStyle={estilo.inputDentro}
                containerStyle={estilo.inputConteiner}
                leftIcon={{ name: props.iconeEsquerda, color: '#FFF', type: props.tipoIcone }}
                keyboardType={props.tipoTeclado}
                onBlur={props.onBlur} />
        </View>
    );
}

export interface CampoSenhaProps {
    placeholder: string
    habilitado?: boolean
    onChangeText?(texto: string): void
    iconeDireira?: string
    onBlur?(): void
}

export function CampoSenha(props: CampoSenhaProps) {
    return (
        <View>
            <Input placeholder={props.placeholder}
                placeholderTextColor='#FFF'
                onChangeText={props.onChangeText}
                inputStyle={estilo.inputDentro}
                containerStyle={estilo.inputConteiner}
                leftIcon={{ name: 'lock', color: '#FFF' }}
                onBlur={props.onBlur}
                secureTextEntry={!props.habilitado} />
        </View>
    )
}

const estilo = StyleSheet.create({
    inputDentro: {
        color: '#FFF'
    },
    inputConteiner: {
        width: 300
    }
});