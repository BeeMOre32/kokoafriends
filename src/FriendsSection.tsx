import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Profile} from '@/src/data';
import Margin from '@/src/Margin';
import FriendsList from '@/src/FriendsList';

interface FriendsSectionProps {
  friends: Profile[];
}

function FriendsSection(Props: FriendsSectionProps) {
  const {friends} = Props;

  const [isOpened, setIsOpened] = React.useState(true);

  const toggleIsOpened = () => {
    setIsOpened(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.FriendTitleContainer}>
        <Text>친구 {friends.length} 명</Text>

        <TouchableOpacity onPress={toggleIsOpened}>
          <Text>{isOpened ? '접기' : '펼치기'}</Text>
        </TouchableOpacity>
      </View>

      <Margin height={10} />

      {isOpened && <FriendsList friends={friends} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },

  FriendTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FriendsSection;
