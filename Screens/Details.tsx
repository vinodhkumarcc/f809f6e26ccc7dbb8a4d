import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const Details = (props: any) => {
  return (
    <View testID="details-wrapper" style={styles.container}>
      <Text style={styles.mainText}>Name: {props.astroid.name}</Text>
      <Text style={styles.mainText}>
        NASA JPL URL: {props.astroid.nasa_jpl_url}
      </Text>
      <Text style={styles.mainText}>
        is_potentially_hazardous_asteroid:
        {props.astroid.is_potentially_hazardous_asteroid === true
          ? "TRUE"
          : "FALSE"}
      </Text>
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
  mainText: {
    fontSize: 20,
    lineHeight: 23,
    marginBottom: 15,
  },
});

const mapStateToProps = (state: any) => ({
  astroid: state.appReducer,
});

export default connect(mapStateToProps)(Details);
