import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResourcesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Resources List</Text>
      <Button
        title="Police"
        onPress={() => alert('Contacting Police...')}
      />
      <Button
        title="Lawyer"
        onPress={() => alert('Contacting Lawyer...')}
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

export default ResourcesScreen;
