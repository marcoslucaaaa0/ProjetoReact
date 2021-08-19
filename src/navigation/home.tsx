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
            activeBackgroundColor: 'rgba(81, 120, 103, 0.2)',
            inactiveBackgroundColor: '#517867',
            activeTintColor: '#387c6d',
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
                tabBarIcon: (props) => <FontAwesome name='th-list' size={20} color={props.focused ? '#387c6d' : '#fff'} />
            }}
        />
        <Tab.Screen 
            name='pesquisa' 
            component={PesquisaScreen} 
            options={{
                tabBarLabel: 'Pesquisar',
                tabBarIcon: (props) => <FontAwesome5 name='search' size={20} color={props.focused ? '#387c6d' : '#fff'} />
            }}
        />
        <Tab.Screen 
            name='home' 
            component={HomeScreen}  
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: (props) => <Entypo name='home' size={20} color={props.focused ? '#387c6d' : '#fff'} />
            }}
        />
        <Tab.Screen 
            name='carrinho' 
            component={CarrinhoScreen} 
            options={{
                tabBarLabel: 'Carrinho',
                tabBarIcon: (props) => <Entypo name='shopping-cart' size={20} color={props.focused ? '#387c6d' : '#fff'} />
            }}
        />
        <Tab.Screen 
            name='usuario' 
            component={UsuarioScreen} 
            options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: (props) => <FontAwesome name='user' size={22} color={props.focused ? '#387c6d' : '#fff'} />
            }}
        />
    </Tab.Navigator>
)