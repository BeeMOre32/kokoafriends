/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Header from '@/src/header';
import MyProfile from '@/src/myProfile';
import {friendProfiles, myProfile} from '@/src/data';
import Margin from '@/src/Margin';
import Division from '@/src/Division';
import FriendsSection from '@/src/FriendsSection';
import TabBar from '@/src/tabBar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <StatusBar barStyle={'light-content'} />
        <Header />
        <Margin height={10} />
        <MyProfile Profile={myProfile} size={'medium'} />
        <Margin height={10} />
        <Division />
        <Margin height={12} />
        <FriendsSection friends={friendProfiles} />
      </View>

      <TabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
