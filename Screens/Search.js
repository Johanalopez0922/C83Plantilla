import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pantalla de búsqueda</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#5653D4",
//   },
//   text: {
//     color: "#ffff",
//     fontSize: 30,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4",
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF",
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    color: "#FFFFFF",
  },
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
  },
  lowerContainer: {
    flex: 0.8,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  },
  lowerLeftContaiiner: {
    alignSelf: "flex-end",
    marginTop: -40,
  },
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  transactionText: {
    fontSize: 20,
  },
  date: {
    fontSize: 12,
    paddingTop: 5,
  },
});
