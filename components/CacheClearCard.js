import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CacheClearCard() {
  return (
    <View style={styles.card}>
      <MaterialIcons name="delete" size={28} color="#444" />
      <Text style={styles.text}>Clear cache & cookies</Text>
      <Button title="CLEAR" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 12,
  },
});
