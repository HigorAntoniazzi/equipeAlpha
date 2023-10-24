import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Componentes/Box';
export default function App() {
  return (


    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Listas 2</Text>
      </View>

      <Box corView='#ffa4a4' corTexto={'red'} mensagemAnimais={'Animais'}></Box>
      <Box corView='#eda4ff' corTexto={'purple'} mensagemAnimais={'Carros'}></Box>
      <Box corView='#a4d4ff' corTexto={'blue'} mensagemAnimais={'Peixes'}></Box>
      <Box corView='#a4ffc3' corTexto={'green'} mensagemAnimais={'Times'}></Box>
      <Box corView='#d1d6d3' corTexto={'gray'} mensagemAnimais={'Filmes'}></Box>
      <Box corView='#e8efbd' corTexto={'#747d10'} mensagemAnimais={'Linguagem'}></Box>
    </View>
  );
}








