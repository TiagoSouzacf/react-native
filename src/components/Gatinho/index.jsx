import {Text} from 'react-native'
import { StyleSheet } from "react-native";


export const Gatinho = ({nome}) => {
    return (
        <Text style={styles.texto}>GATINHO {nome}</Text>
    )
};

const styles = StyleSheet.create({
    texto:{
        fontSize:30,
        color: "white"        
    }
})

