import {StyleSheet, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {colors} from '@/constants';

interface ScoreInputProps {
  score: number;
  onChangeScore: (value: number) => void;
}

function ScoreInput({score, onChangeScore}: ScoreInputProps) {
  return (
    <View style={styles.container}>
      <Slider
        value={score}
        onValueChange={onChangeScore}
        step={1}
        minimumValue={1}
        maximumValue={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.GRAY_200,
  },
});

export default ScoreInput;
