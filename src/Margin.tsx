import React from 'react';
import {View} from 'react-native';

interface MarginProps {
  height: number;
}

function Margin(Props: MarginProps) {
  return <View style={{height: Props.height}} />;
}

export default Margin;
