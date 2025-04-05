import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AccessLoggerCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <MaterialIcons name="search" size={28} color="#444" />
        <Text style={styles.title}>Access logger</Text>
      </View>
      <Text style={styles.log}>12:03 PM • Location accessed</Text>
      <Text style={styles.log}>10:15 AM • Camera accessed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    marginLeft: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  log: {
    fontSize: 14,
    color: '#555',
  },
});
