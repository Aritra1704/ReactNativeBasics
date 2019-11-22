import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('Color');
        }}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => {
          props.navigation.navigate('Square');
        }}
        title="Go to Square Screen"
      />
      <Button
        onPress={() => {
          props.navigation.navigate('Counter');
        }}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => {
          props.navigation.navigate('Text');
        }}
        title="Go to Text Screen"
      />
      <Button
        onPress={() => {
          props.navigation.navigate('Box');
        }}
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default HomeScreen;
