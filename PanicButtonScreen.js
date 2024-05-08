import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PanicButtonScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Press the button in case of emergency!</Text>
      <Button
        title="Activate Panic Alert!"
        onPress={() => alert('Panic alert has been sent!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PanicButtonScreen;
