import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, FlatList, Button, Image} from 'react-native';
import styles from './styles';
import state from '../../mobX/index';
import {observer} from 'mobx-react-lite';
import Card from '../../components/Card/Card';
const MainScreen = () => {
  const mobXState = state;
  useEffect(() => {
    mobXState.getCardsFromJsonServer();
  }, []);

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View>
        <FlatList
          data={mobXState.cards}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card id={item.id} url={item.imageUrl} name={item.name} />
          )}
        />
      </View>

      <Button title="Submit" />
    </SafeAreaView>
  );
};

export default observer(MainScreen);
