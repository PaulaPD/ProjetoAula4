import React from 'react';
import { AppRegistry, View } from 'react-native';
import Titulo from './src/componentes/titulo';
import ListaLanchonete from './src/componentes/listaLanchonete'


const App = () => {
    return (
        <View>
            <Titulo texto={'Lista de Produtos da Lanchonete'} />
            <ListaLanchonete/>
        </View>

    );
};


AppRegistry.registerComponent('ProjetoAula4', () => App);
