import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>

      <TouchableOpacity
        hitSlop={{
          top: 10,
          bottom: 10,
        }}
        style={styles.IConContainer}>
        <Text>🔍</Text>
        <Text>🔍</Text>
        <Text>🔍</Text>
        <Text>🔍</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IConContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;
