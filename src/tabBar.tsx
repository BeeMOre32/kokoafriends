import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TabButton = ({
  isSelected,
  onPress,
  title,
}: {
  isSelected: boolean;
  onPress: () => void;
  title: string;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.TabButton}>
      <Text>
        {title} {isSelected ? '🔥' : ''}
      </Text>
    </TouchableOpacity>
  );
};

function TabBar() {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const onPress = (idx: number) => {
    setSelectedIdx(idx);
  };
  return (
    <View style={styles.container}>
      {['친구', '채팅', '더보기'].map((title, idx) => {
        return (
          <TabButton
            key={idx}
            isSelected={idx === selectedIdx}
            onPress={() => onPress(idx)}
            title={title}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'deepskyblue',
    flexDirection: 'row',
  },

  TabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default TabBar;
