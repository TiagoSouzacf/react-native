import { StyleSheet, Text, View } from "react-native";

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.superior}></View>
      <View style={styles.superior}></View>
      <View style={styles.superior}></View>
      <View style={styles.meio}></View>
      <View style={styles.meio}></View>
      <View style={styles.meio}></View>
      <View style={styles.inferior}></View>
      <View style={styles.inferior}></View>
      <View style={styles.inferior}></View>
      <View style={styles.fundo}></View>
      <View style={styles.fundo}></View>
      <View style={styles.fundo}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
  },
  texto: {
    color: "#fff",
    fontSize: 50,
    textAlign: "center",
    marginBottom: 100,
  },
  superior: {
    height: 100,
    width: 100,
    backgroundColor: "powderblue",
    margin: 5,
  },

  meio: {
    height: 100,
    width: 100,
    backgroundColor: "skyblue",
    margin: 5,
  },

  inferior: {
    height: 100,
    width: 100,
    backgroundColor: "steelblue",
    margin: 5,
  },
  fundo: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    margin: 5,
  },
});

export default FlexBox;
