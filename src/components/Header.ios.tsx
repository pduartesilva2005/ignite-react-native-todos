import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/header.ios';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins_600SemiBold' }]}>
        do
      </Text>
    </View>
  );
}
