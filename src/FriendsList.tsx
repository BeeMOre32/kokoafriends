import React from 'react';
import {ScrollView, View} from 'react-native';
import MyProfile from '@/src/myProfile';
import {Profile} from '@/src/data';

interface FriendsListProps {
  friends: Profile[];
}

function FriendsList(Props: FriendsListProps) {
  const {friends} = Props;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        gap: 15,
        paddingBottom: 10,
      }}>
      {friends.map((friend, index) => (
        <View key={index} style={{marginRight: 10}}>
          <MyProfile Profile={friend} size={'small'} />
        </View>
      ))}
    </ScrollView>
  );
}

export default FriendsList;
