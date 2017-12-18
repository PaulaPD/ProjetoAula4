import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/componentes/titulo';
import listaLanchonete from './src/components/lista-coisas.2';

AppRegistry.registerComponent('ProjetoAula4', () => App);


const App = () => {
    return (
        <View>
            <Titulo texto={'Lista de Produtos da Lanchonete'} />
            <listaLanchonete />
        </View>

    );
};

AppRegistry.registerComponent('lista', () => App);
