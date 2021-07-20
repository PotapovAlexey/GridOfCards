import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
    flex:1,
    marginHorizontal:10,
    height: 150,
    width:150,
    backgroundColor:'white'
    
  },
  tapedMainWrapper: {
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
    flex:1,
    marginHorizontal:10,
    height: 150,
    backgroundColor:'black'
    
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
export default styles;
