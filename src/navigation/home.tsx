import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/home'
import { UsuarioScreen } from '../screens/usuario'
import { CarrinhoScreen } from '../screens/carrinho'
import { PesquisaScreen } from '../screens/pesquisa'
import { CategoriasScreeen } from '../screens/categorias'
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export const NavegacaoHome = () => (
    <Tab.Navigator 
        initialRouteName='home'
        tabBarOptions={{
            activeBackgroundColor: '#fff',
            inactiveBackgroundColor: '#06AA48',
            activeTintColor: '#06AA48',
            inactiveTintColor: '#fff',
            labelStyle: {
                fontSize: 11,
                paddingBottom: 2,
                fontWeight: 'bold'
            },
            iconStyle: {
                marginTop: 3
            }
        }}
    >
        <Tab.Screen 
            name='categorias' 
            component={CategoriasScreeen} 
            options={{
                tabBarLabel: 'Categorias',
                tabBarIcon: (props) => <FontAwesome name='th-list' size={20} color={props.focused ? '#06AA48' : '#fff'} />
            }}
        />
       
        <Tab.Screen 
            name='home' 
            component={HomeScreen}  
            options={{
                tabBarLabel: 'Jogos',
                tabBarIcon: (props) => <FontAwesome5 name='futbol' size={20} color={props.focused ? '#06AA48' : '#fff'} />
            }}
        />
      
        <Tab.Screen 
            name='usuario' 
            component={UsuarioScreen} 
            options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: (props) => <FontAwesome name='user' size={22} color={props.focused ? '#06AA48' : '#fff'} />
            }}
        />
    </Tab.Navigator>
)