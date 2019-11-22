import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <Text style={styles.text1Style}>Child #1</Text>
      <Text style={styles.text2Style}>Child #2</Text>
      <Text style={styles.text3Style}>Child #3</Text> */}
      <View style={styles.orangeStyle} />
      <View style={styles.greenStyle} />
      <View style={styles.violetStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orangeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'orange',
  },
  greenStyle: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    backgroundColor: 'green',
  },
  violetStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'violet',
  },
  text1Style: {
    borderWidth: 3,
    borderColor: 'red',
  },
  text2Style: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 18,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  text3Style: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
