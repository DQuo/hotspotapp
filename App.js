import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

// Imports: Screen Components
import Feed from './screens/Feed';


// Root Component: <App />
export default function App() {
  return (
    <View style={styles.container}>
      <Feed style={styles.feed} />
    </View>
  );
}

const platformVersion = (Platform.OS === 'ios') ? (
  parseInt(Platform.Version, 10)
) : (
  Platform.Version
);

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight
    },

    feed: {
      flex: 1,
      marginTop: Platform.OS === 'android' || platformVersion < 11 ? Constants.statusBarHeight : 0,
    }
  }
)
