import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Card = ({id, url, name, onPress, isTapped}) => {
  return (
    <View style={isTapped ? styles.tapedMainWrapper : styles.mainWrapper}>
      <Text
        style={isTapped ? styles.tappedCatsNameStyle : styles.catsNameStyle}>
        {name}
      </Text>
      <TouchableOpacity id={id} onPress={() => onPress(id)}>
        <Image source={{uri: url}} style={styles.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
