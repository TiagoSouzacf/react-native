import { StyleSheet, Text, View } from "react-native";

const Desafio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barraTopo}></View>
      <View style={styles.container2}>
        <View style={styles.retangulo}></View>
        <View style={styles.retangulo2}></View>
      </View>
      <View style={styles.container3}>
        <View style={styles.retanguloRoxo}></View>
        <View style={styles.retanguloAzul}></View>
      </View>
      <View style={styles.barraTopo}></View>
      <View style={styles.container4}>
        <View style={styles.quadradoLaranja}></View>
        <View style={styles.quadradoLaranja}></View>
        <View style={styles.quadradoLaranja}></View>
        <View style={styles.quadradoLaranja}></View>
        <View style={styles.quadradoLaranja}></View>
        <View style={styles.quadradoLaranja}></View>
      </View>
      <View style={styles.container5}></View>
    </View>
  );
};

export default Desafio;

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: "white",
  },
  container2: {
    width: "100%",
    height: "30%",
    alignItems: "center",
  },

  barraTopo: {
    height: "2.5%",
    backgroundColor: "#4ee3c1",
  },
  retangulo: {
    marginTop: 30,
    height: 80,
    width: 80,
    backgroundColor: "#f8a82b",
  },
  retangulo2: {
    marginTop: 30,
    height: 30,
    width: 160,
    backgroundColor: "#f8a82b",
  },
  container3: {
    flexDirection: "row",
  },
  retanguloRoxo: {
    height: 80,
    width: "50%",
    backgroundColor: "#a900fd",
  },
  retanguloAzul: {
    height: 80,
    width: "50%",
    backgroundColor: "#5485e1",
  },
  container4: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: "45%",
    flexWrap: "wrap",
    
  },
  quadradoLaranja: {
    margin: 10,
    height: 80,
    width: 80,
    backgroundColor: "#f8a82b",
  },
  container5: {
    flex:1,
    backgroundColor:"#5485e1"
  },
});
