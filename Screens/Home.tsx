import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { getRandomAstroid } from "../Redux/Actions/action";
import { getAsteroidDetails } from "../Redux/Actions/action";

const Home = (props: any) => {
  const [id, setId] = useState("");

  const showAsteroidDetails = () => {
    props.getRandomAstroid();
    props.navigation.navigate("Details");
  };

  const getAsteroidInfo = () => {
    props.getAsteroidDetails(id);
    props.navigation.navigate("Details");
  };
  return (
    <View testID="home-wrapper" style={styles.container}>
      <TextInput
        onChangeText={(val: string) => setId(val)}
        style={styles.inputField}
        placeholder="Enter Asteroid ID"
      />

      <View style={styles.btn}>
        <Button title="Submit" onPress={getAsteroidInfo}></Button>
      </View>

      <Button title="Random Asteroid" onPress={showAsteroidDetails}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#333",
    padding: 5,
    margin: 10,
    fontSize: 18,
    color: "#000",
  },
  btn: {
    marginBottom: 20,
  },
});

export default connect(null, { getRandomAstroid, getAsteroidDetails })(Home);
