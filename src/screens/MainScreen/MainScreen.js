import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, Button, Alert} from 'react-native';
import styles from './styles';
import state from '../../mobX/index';
import {observer} from 'mobx-react-lite';
import Card from '../../components/Card/Card';

const MainScreen = () => {
  const mobXState = state;

  useEffect(() => {
    mobXState.getCardsFromJsonServer();
  }, [mobXState.isActive]);

  const onPicturePress = id => {
    mobXState.setPickedCards(id);
  };
  const showTappedCardsId = () => {
    Alert.alert(`You pressed on ${mobXState.tappedCards.join()} pictures`);
  };
  return (
    <SafeAreaView style={styles.mainScreenWrapper}>
      <FlatList
        data={mobXState.cards}
        keyExtractor={item => item.id}
        numColumns={'2'}
        renderItem={({item}) => (
          <Card
            id={item.id}
            url={item.imageUrl}
            name={item.name}
            onPress={onPicturePress}
            isTapped={item.status}
          />
        )}
      />

      <Button title="Submit" onPress={showTappedCardsId} />
    </SafeAreaView>
  );
};

export default observer(MainScreen);
