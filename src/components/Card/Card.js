import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Card = ({id, url, name, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.mainWrapper}
      id={id}
      onPress={() => onPress(id)}>
      <Image source={{uri: url}} style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

export default Card;
