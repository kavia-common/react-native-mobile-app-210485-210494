import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

// PUBLIC_INTERFACE
export default function HomeScreen(): JSX.Element {
  /**
   * This is the Home screen for the application.
   * Displays a simple welcome message. Styles follow the Ocean Professional theme.
   *
   * GxP: TODO — Integrate audit trail event when this view is presented (e.g., action=READ, entity='HomeScreen').
   */
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Welcome to the Ocean Professional starter.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray500,
  },
});
