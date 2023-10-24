import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <Text style={styles.title}>Listas 2</Text>
      </View>


      <View style={styles.animais}>
        <Text style={[styles.texto, {color:'red'}]}>Animais</Text>
      </View>

      <View style={styles.carros}>
        <Text style={[styles.texto, {color:'purple'}]}>Carros</Text>
      </View>

      <View style={styles.peixes}>
        <Text style={[styles.texto, {color:'blue'}]}>Peixes</Text>
      </View>



      <View style={styles.times}>
        <Text style={[styles.texto, {color:'green'}]}>Times</Text>
      </View>

      <View style={styles.filmes}>
        <Text style={[styles.texto, {color:'gray'}]}>Filmes</Text>
      </View>

      <View style ={styles.linguagem}>
        <Text style={[styles.texto, {color:'#747d10'}]}>Linguagem</Text>
      </View>



    </View>
  );
}








const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },

  header: {
    backgroundColor: 'green',
    width: '100%',
    height: 70,
    textAlign:'center',
    justifyContent: 'center',
    marginBottom:15

  },

  title : {
   fontSize: 25,
    color:'#fff',
    textAlign:'center', 
    height: 30,

  },

  animais :{
   backgroundColor: '#FFA4A4',
   width: '95%',
   margin: 10,
   height: 75,
   justifyContent:'center',
   alignItems:'center'


  },

  carros : {
  backgroundColor: '#EDA4FF',
  width: '95%',
  margin: 20,
  height: 75,
  justifyContent:'center',
  alignItems:'center'
  },

  peixes :{
    backgroundColor: '#A4D4FF',
   width: '95%',
   margin: 20,
   height: 75,
   justifyContent:'center',
   alignItems:'center'
  },

  times:{
    backgroundColor: '#A4FFC3',
   width: '95%',
   margin: 20,
   height: 75,
   justifyContent:'center',
   alignItems:'center'
  },

  filmes:{
    backgroundColor: '#D1D6D3',
   width: '95%',
   margin: 20,
   height: 75,
   justifyContent:'center',
   alignItems:'center'

  },

  linguagem :{
    backgroundColor: '#E8EFBD',
   width: '95%',
   margin: 20,
   height: 75,
   justifyContent:'center',
   alignItems:'center'
  },

  texto : {
    fontSize: 25,
    fontWeight:'bold'

  }


});
