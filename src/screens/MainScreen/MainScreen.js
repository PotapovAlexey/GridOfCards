import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import state from '../../mobX/index';
import {observer} from 'mobx-react-lite';
import Card from '../../components/Card/Card';
const MainScreen = () => {
  const mobXState = state;
  const [bacgroundColor, setBacgroundColor] = useState(false);
  useEffect(() => {
    mobXState.getCardsFromJsonServer();
  }, []);
  const onPicturePress = id => {
    mobXState.setPickedCards(id);
    if(mobXState.cards.some(item=>item.id===id)){
      setBacgroundColor(true) 
    }
   
  };
  console.log(mobXState.tappedCards);
  const showTappedCardsId = () => {
    Alert.alert(`You tap ${mobXState.tappedCards.join()} `);
  };
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <FlatList
        data={mobXState.cards}
        keyExtractor={item => item.id}
        numColumns={'3'}
        renderItem={({item}) => (
          <Card
            id={item.id}
            url={item.imageUrl}
            name={item.name}
            onPress={onPicturePress}
            bacgroundColor={bacgroundColor}
          />
        )}
      />

      <Button title="Submit" onPress={showTappedCardsId} />
    </SafeAreaView>
  );
};

export default observer(MainScreen);
