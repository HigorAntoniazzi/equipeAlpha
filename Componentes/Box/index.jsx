import { View } from "react-native";

import styles from "./styles";
export default function Box(props) {

    return (

        <View style={[styles.box, {backgroundColor:props.corView}]}> 
            <Text style={[styles.textoView, {color:props.corTexto}]} > {props.mensagemAnimais} <Text>lista</Text></Text>
        </View>



    );



}