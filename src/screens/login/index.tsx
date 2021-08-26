import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, StatusBar, ActivityIndicator, Switch } from 'react-native';
import { Button } from 'react-native-elements'
import { CampoInput, CampoSenha } from './../../componentes/input'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { estilo } from '../../estilos/estiloCadastroLogin';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface LoginScreenProps {
}

export default function LoginScreen(props: LoginScreenProps) {

    const navegacao = useNavigation()
    const [ erroLogin, setErroLogin ] = React.useState('')

    async function logar({ email, senha }: any) {
        await new Promise(r => setTimeout(() => r(''), 3000))

        if (email.trim() == 'marcosluca@gmail.com' && senha == 'senha123') {
            setErroLogin('')
            navegacao.navigate('app')
        } else {
            setErroLogin('Email ou senha incorreta')
        }
    }

    const [habilitado, setHabilitado] = React.useState(false)
    const alternar = () => {
        setHabilitado(!habilitado)
    }

    return (
        <ImageBackground source={require('./../../assets/imagens/papel-de-fundo.jpg')} style={estilo.fundo}>
            <StatusBar />

            <View style={estilo.conteiner}>
                <Image style={estilo.logo} source={require('./../../assets/imagens/futebolHoje_Logo.png')} />

                <Formik initialValues={{ email: '', senha: '' }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('(Email obrigatório)').email('(Email inválo)').max(50, '(Máximo 50 caracteres)'),
                        senha: Yup.string().required('(Senha obrigatória)').min(8, '(Mínimo 8 caracteres)').max(15, '(Máximo 15 caracteres)')
                    })}
                    onSubmit={logar} >

                    {({ handleChange, handleSubmit, isSubmitting, errors, touched, handleBlur }) => (
                        <View style={estilo.formulario}>

                            <CampoInput 
                                placeholder='Digite seu email' 
                                iconeEsquerda='email'
                                tipoTeclado='email-address'
                                onChangeText={handleChange('email')} 
                                onBlur={() => handleBlur} 
                            />
                            {touched.email && <Text style={estilo.mensagemValidacao} >{errors.email}</Text>}

                            <CampoSenha 
                                placeholder='Digite sua senha' 
                                onChangeText={handleChange('senha')} 
                                onBlur={() => handleBlur} 
                                habilitado={habilitado} 
                            />
                            {touched.senha && <Text style={estilo.mensagemValidacao}>{errors.senha}</Text>}

                            <View style={estilo.check}>
                                <Switch
                                    onValueChange={alternar}
                                    value={habilitado}
                                    trackColor={{ true: '#e6b566', false: '#bbbbbb' }}
                                    thumbColor={habilitado ? '#e6b566' : '#bbbbbb'}
                                    />


                                <Text style={estilo.textoCheck}>Exibir senha</Text>
                            </View>

                            {erroLogin != '' && <Text style={estilo.mensagemErroLogin}>{erroLogin}</Text>}

                            {isSubmitting && <ActivityIndicator color='#FFF' size={30} style={{margin: 5}} />}
                            {!isSubmitting && <Button title='Entrar'
                                onPress={() => handleSubmit()} buttonStyle={estilo.botao} />}

                            <TouchableOpacity onPress={() => navegacao.navigate('cadastro')}>
                                <Text style={estilo.linkNavegacao}>Não possui conta?</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                </Formik>
            </View>
        </ImageBackground>
    );
}
