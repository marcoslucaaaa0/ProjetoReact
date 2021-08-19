import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { CampoUsuario } from './componentes';
import * as ImagePicker from 'expo-image-picker'
import { ModeloUsuario } from '../../modelos/usuario';
import { Formik } from 'formik';
import * as Yup from 'yup';

export interface UsuarioScreenProps {
}

export function UsuarioScreen(props: UsuarioScreenProps) {



  let logado: boolean = true
  const navegacao = useNavigation()
  const [foto, setFoto] = React.useState<string>('')
  const [fotoEnviada, setFotoEnviada] = React.useState<boolean>(false)
  const [desabilitado, setdesabilitado] = React.useState<boolean>(true)

  let usuario: ModeloUsuario = {
    id: '1',
    nome: 'Edvan Oliveira',
    cpf: '11111111111',
    email: 'teste@teste.com',
    telefone: '8299964578',
    senha: '12345678',
    foto: foto
  }

  function salvarUsuario(dados: ModeloUsuario) {
    console.log(dados)
    usuario = dados
    setdesabilitado(true)
  }

  const adicionarFoto = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissao.granted) {
      const imagem = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        quality: 0.3,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      })
      if (!imagem.cancelled) {
        const extensaoImagem = imagem.uri.split('.').pop()
        setFoto('data:image/' + extensaoImagem + ';base64,' + imagem.base64)
        setFotoEnviada(true)
      }
    } else {
      console.log('Permissão negada!')
    }
  }

  return (
    <View style={estilo.fundo}>
      <StatusBar />

      {!logado && <View style={estilo.conteiner}>
        <Text style={estilo.titulo}>Bem vindo!</Text>
        <Text style={estilo.texto}>Abaixo você pode criar uma conta ou se cadastrar caso não tenha uma.</Text>
        <View style={estilo.conteinerBotoes}>
          <Button title='Cadastre-se' buttonStyle={estilo.botoes} titleStyle={{ color: '#f4f3f3' }} onPress={() => navegacao.navigate('cadastro')} />
          <Button title='Login' buttonStyle={estilo.botoes} titleStyle={{ color: '#f4f3f3' }} onPress={() => navegacao.navigate('login')} />
        </View>
      </View>}

      {logado && <Formik
        initialValues={{ ...usuario }}
        validationSchema={Yup.object().shape({
          nome: Yup.string().required('(Nome obrigatório)').min(5, '(Nome completo)').max(20, 'Máximo 20 caracteres'),
          telefone: Yup.string().required('(Telefone obrigatório)').min(5, '(Mínimo 5 caracteres)').max(20, '(Máximo 20 caracteres)'),
          senha: Yup.string().required('(Senha obrigatória)').min(8, '(Mínimo 8 caracteres)').max(15, '(Máximo 15 caracteres)')
        })}
        onSubmit={salvarUsuario}
      >
        {({ handleChange, handleSubmit, values, errors, resetForm }) => (
          <View style={estilo.conteinerLogado}>

            <TouchableOpacity onPress={adicionarFoto}>
              {!fotoEnviada && <Image source={require('./../../assets/imagens/foto-usuario.png')} style={estilo.foto} />}
              {fotoEnviada && <Image source={{ uri: usuario.foto }} style={estilo.foto} />}
            </TouchableOpacity>

            {errors.nome && <Text style={estilo.mensagemValidacao}>{errors.nome}</Text>}
            <CampoUsuario valor={values.nome} desabilitado={desabilitado} onChangeText={handleChange('nome')} />

            <CampoUsuario valor={values.cpf} desabilitado={true} />
            <CampoUsuario valor={values.email} desabilitado={true} />

            {errors.telefone && <Text style={estilo.mensagemValidacao}>{errors.telefone}</Text>}
            <CampoUsuario valor={values.telefone} desabilitado={desabilitado} onChangeText={handleChange('telefone')} />

            {errors.senha && <Text style={estilo.mensagemValidacao}>{errors.senha}</Text>}
            <CampoUsuario valor={values.senha} senha desabilitado={desabilitado} onChangeText={handleChange('senha')} />

            <View style={estilo.salvarEditar}>
              {desabilitado && <Button
                buttonStyle={[estilo.botaoSalvar, { backgroundColor: '#45526c' }]}
                title='Editar' icon={<AntDesign name='edit'
                  color='#eee' size={17} />} titleStyle={estilo.tituloBotao}
                onPress={() => setdesabilitado(false)}
              />}

              {!desabilitado && <Button
                buttonStyle={[estilo.botaoSalvar, { backgroundColor: '#45526c' }]}
                title='Cancelar' icon={<AntDesign name='close' color='#eee' size={17} />}
                titleStyle={estilo.tituloBotao} onPress={() => {
                  if (errors.nome || errors.telefone || errors.senha) resetForm()
                  else values = { ...usuario }
                  setdesabilitado(true)
                }}
              />}

              <Button
                buttonStyle={[estilo.botaoSalvar, { backgroundColor: '#aa2b1d' }]} title='Salvar'
                icon={<AntDesign name='save' color={errors.nome || errors.telefone || errors.senha ? '#000' : '#eee'} size={17} />}
                titleStyle={estilo.tituloBotao}
                onPress={() => handleSubmit()}
                disabled={errors.nome || errors.telefone || errors.senha || desabilitado ? true : false}
              />
            </View>

          </View>
        )}

      </Formik>}
    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#9fb8ad'
  },
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2f5d62'
  },
  texto: {
    fontSize: 15,
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    color: '#2f5d62',
    textAlign: 'center'
  },
  conteinerBotoes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    marginTop: 20
  },
  botoes: {
    width: 120,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#2f5d62'
  },
  conteinerLogado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto: {
    height: 120,
    width: 120,
    marginBottom: 30,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#519299'
  },
  campo: {
    display: 'flex',
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14
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
  salvarEditar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    marginTop: -10
  },
  botaoSalvar: {
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#af2d2d',
    padding: 11,
    width: 110
  },
  tituloBotao: {
    marginLeft: 5,
    fontSize: 15,
    color: '#ddd'
  },
  mensagemValidacao: {
    color: '#444',
    marginBottom: 5,
    fontSize: 15,
    alignSelf: 'flex-end',
    marginRight: 22
  }
});
