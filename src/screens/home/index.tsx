import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons'

export interface HomeScreenProps {
}

export function HomeScreen(props: HomeScreenProps) {


  return (
    <View style={estilo.fundo}>
      <StatusBar />

      <View style={estilo.conteiner}>
        <ScrollView>
          <View style={estilo.cabecalho}>
            <ImageBackground
              source={require('./../../assets/imagens/futebolHoje_Logo.png')}
              style={estilo.logo}
            />
          </View>
          <Card containerStyle={{marginTop: 50}}  >

            <Card.Title style={{ textAlign: 'center' }}>HOJE</Card.Title>

            <Card.Divider />
            {
              <View style={{ marginBottom: 45 }}>
                <Text style={estilo.texthoursCard}>16:00</Text>

                <View style={estilo.viewCard}>

                  <View style={estilo.escudosENomes}>

                    <Text>FLA</Text>

                    <Image source={require('./../../assets/imagens/escudos/FlamengoHD.png')}
                      style={estilo.iconsClubes}
                      resizeMode="cover"
                    />

                  </View>

                  <View style={estilo.iconX} >
                    <FontAwesome name='times' size={20} color={'#000'} />
                  </View>

                  <View style={estilo.escudosENomes}>

                    <Image source={require('./../../assets/imagens/escudos/AtleticoMG.png')}
                      style={estilo.iconsClubes}
                      resizeMode="cover"
                    />
                    <Text>CAM</Text>

                  </View>

                </View>

              </View>
            }

            <Card.Divider />

            <View style={{ marginBottom: 45 }}>
              <Text style={estilo.texthoursCard}>16:00</Text>

              <View style={estilo.viewCard}>

                <View style={estilo.escudosENomes}>

                  <Text>INT</Text>

                  <Image source={require('./../../assets/imagens/escudos/Internacional.png')}
                    style={estilo.iconsClubes}
                    resizeMode="cover"
                  />

                </View>

                <View style={estilo.iconX} >
                  <FontAwesome name='times' size={20} color={'#000'} />
                </View>

                <View style={estilo.escudosENomes}>

                  <Image source={require('./../../assets/imagens/escudos/Grêmio.png')}
                    style={estilo.iconsClubes}
                    resizeMode="cover"
                  />
                  <Text>GRE</Text>

                </View>

              </View>

            </View>


            <Card.Divider />

            <View style={{ marginBottom: 45 }}>
              <Text style={estilo.texthoursCard}>16:00</Text>

              <View style={estilo.viewCard}>

                <View style={estilo.escudosENomes}>

                  <Text>CEA</Text>

                  <Image source={require('./../../assets/imagens/escudos/CearaHD.png')}
                    style={estilo.iconsClubes}
                    resizeMode="cover"
                  />

                </View>

                <View style={estilo.iconX} >
                  <FontAwesome name='times' size={20} color={'#000'} />
                </View>

                <View style={estilo.escudosENomes}>

                  <Image source={require('./../../assets/imagens/escudos/FortalezaHD.png')}
                    style={estilo.iconsClubes}
                    resizeMode="cover"
                  />
                  <Text>FOR</Text>

                </View>

              </View>

            </View>

            <Card.Divider />

            <View style={{ marginBottom: 45 }}>
              <Text style={estilo.texthoursCard}>16:00</Text>

              <View style={estilo.viewCard}>

                <View style={estilo.escudosENomes}>

                  <Text>JUV</Text>

                  <Image source={require('./../../assets/imagens/escudos/Juventude.png')}
                    style={estilo.iconsClubes}
                    resizeMode="cover"
                  />

                </View>

                <View style={estilo.iconX} >
                  <FontAwesome name='times' size={20} color={'#000'} />
                </View>

                <View style={estilo.escudosENomes}>

                  <Image source={require('./../../assets/imagens/escudos/SportRecife.png')}
                    style={estilo.iconsClubes}
                    resizeMode="cover"
                  />
                  <Text>SPT</Text>

                </View>

              </View>

            </View>

          </Card>
        </ScrollView>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#ffff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cabecalho: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    backgroundColor: '#06AA48',
    marginBottom: 20,

  },

  viewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between'
  },

  escudosENomes: {
    flexDirection: 'row',
    alignItems: 'center',

  },


  texthoursCard: {
    textAlign: 'center',

  },

  conteiner: {
    width: '100%'
  },

  logo: {
    width: '70%',
    height: '100%',
    marginLeft: 70,
    marginTop: 30



  },

  iconsClubes: {
    width: 24,
    height: 24,


  },


  iconX: {
    marginLeft: 7

  },

});