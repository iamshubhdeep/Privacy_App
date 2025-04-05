import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TrustScoreCard({ score }) {
  return (
    <View style={styles.card}>
      <MaterialIcons name="verified-user" size={28} color="#444" />
      <Text style={styles.text}>App trust score</Text>
      <Text style={styles.score}>{score}</Text>
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
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  score: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
