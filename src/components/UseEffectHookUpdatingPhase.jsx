/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHookUpdatingPhase = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);
    // useEffect(() => {
    //     console.log('Im a useEffect Hook');
    // }, [counter]);
    // useEffect(() => {
    //     console.log('Score');
    // }, [score]);
  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>UseEffect Hook</Text>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Counter: {counter}</Text>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Score: {score}</Text>
      <Button title="Counter" onPress={() => setCounter(counter + 1)} />
      <Button title="Score" onPress={() => setScore(score + 10)} />
      <InfoDetails count={counter} points={score} />
    </View>
  );
};

const InfoDetails = ({count, points}) => {
    useEffect(() => {
        console.log('Im a child component');
    }, [count]);
    return(
        <View>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Info Details</Text>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Count: {count} </Text>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Points: {points} </Text>
        </View>
    );
};

export default UseEffectHookUpdatingPhase;
