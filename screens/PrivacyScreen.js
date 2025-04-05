import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PrivacyCard from '../components/PrivacyCard';
import CacheClearCard from '../components/CacheClearCard';
import TrustScoreCard from '../components/TrustScoreCard';
import AccessLoggerCard from '../components/AccessLoggerCard';

export default function PrivacyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PRIVACY</Text>

      <PrivacyCard icon="mic" title="Mic, camera, location access" description="Microphone, camera, and location are on" />
      <CacheClearCard />
      <PrivacyCard icon="warning" title="Scan for malware" description="No threats found" />
      <TrustScoreCard score={85} />
      <AccessLoggerCard />

      <TouchableOpacity style={styles.settingsIcon}>
        <MaterialIcons name="settings" size={32} color="#555" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  settingsIcon: {
    marginTop: 30,
    alignSelf: 'center',
  },
});
