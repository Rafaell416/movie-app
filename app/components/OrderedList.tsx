import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  items: string[];
};

const OrderedList = ({items}: Props) => {
  const data = items.map(item => (
    <Text key={item} style={{fontSize: 20}}>{`\u2022 ${item}`}</Text>
  ));

  return <View style={{padding: 10}}>{data}</View>;
};

export default OrderedList;
