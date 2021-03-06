import React, {useReducer} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

const COUNTER_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <View>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({type: 'increment', payload: COUNTER_INCREMENT})
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({type: 'decrement', payload: COUNTER_INCREMENT})
        }
      />
      <Text>Current Couter: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
