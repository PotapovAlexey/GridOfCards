import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:3,
    marginVertical:3,
    height: 150,
    width:150,
    backgroundColor:'white'
    
  },
  tapedMainWrapper: {
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:3,
    marginVertical:3,
    height: 120,
    width:150,
    backgroundColor:'black'
    
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
export default styles;
