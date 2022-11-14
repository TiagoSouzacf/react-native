import React, { useState } from "react";
import { Text, View, ScrollView, Button, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { Gatinho } from "./src/components/Gatinho";
import reactLogo from './src/assets/react.png'

export default function App() {

  const [nome, setNome] = useState("")
  const [isTrue, setIsTrue] = useState(false)
  
  const handlePress = () =>{

    
    //console.log('Pressionei')
    //alert('Pressionei')
    setIsTrue(!isTrue)
  }
  
  return (
    <View style={styles.container}>

      <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}style={{ width:50, height:50}}/>
      <Image source={reactLogo}style={{ width:50, height:50}}/>
      {isTrue ?<Image source={reactLogo}style={{ width:50, height:50}}/> :<Image source={require('./src/assets/angular.png')}
      style={{ width:50, height:50}}/> }

      <Text style={styles.texto}>Hello World!</Text>

      <Gatinho nome="fubá" />

      <Text style={styles.texto}>Input: {nome}</Text>
      
      <Text style={styles.texto}>{isTrue ? 
      <Image source={reactLogo}style={{ width:50, height:50}}/> :
      <Image source={require('./src/assets/angular.png')}
      style={{ width:50, height:50}}/> }</Text>

      <TextInput
      style={{backgroundColor: '#fff',marginTop:40, marginBottom:20, borderRadius:10, width: '70%'}}
      placeholder="Digite o nome do Gatinho"
      onChangeText={setNome}
      value={nome}
      />

      <Button onPress={handlePress} title="Clique aqui" color="#215491" />

      <TouchableOpacity onPress={() => handlePress()} style={styles.botao}>
        <Text style={styles.texto}>TouchableOpacity</Text>
      </TouchableOpacity>

    </View>
  );
}
