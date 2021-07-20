import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import state from '../../mobX/index';
import {observer} from 'mobx-react-lite';

const MainScreen = () => {
  const mobXState = state;
  useEffect(() => {
    mobXState.getCardsFromJsonServer();
  }, []);
  console.log('mobXState', mobXState.cards);
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default observer(MainScreen);
