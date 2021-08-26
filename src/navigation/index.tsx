import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CadastroScreen } from '../screens/cadastro'
import LoginScreen from '../screens/login'
import { NavegacaoHome } from './home'
import { CategoriaScreen } from '../screens/categoria'
import { ProdutoScreen } from '../screens/produto'

const Stack = createStackNavigator()

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='app'>
            <Stack.Screen name='cadastro' component={CadastroScreen} />
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='categoria' component={CategoriaScreen} />
            <Stack.Screen name='detalhes' component={ProdutoScreen} />
            <Stack.Screen name='app' component={NavegacaoHome} />
        </Stack.Navigator>
    </NavigationContainer>
)

