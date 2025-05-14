import React from 'react';
import { View, Text } from 'react-native';
import { global } from '../styles/GlobalStyles';

const EcranDetalii = () => {
  return (
    <View style={global.container}>
      <Text style={global.titlu}>Alimentation plan 1</Text>
      <Text>
        Aceasta este o aplicație demonstrativă ToDo List realizată în React Native.
        Navigarea între ecrane este gestionată cu React Navigation.
      </Text>
    </View>
  );
};

export default EcranDetalii;
