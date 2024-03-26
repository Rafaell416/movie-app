import {memo} from 'react';
import {View, StyleSheet, Text, Dimensions, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ListEmptyState = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>❤️</Text>
      <Text style={styles.text}>You've not liked any movie or show</Text>
      <Button title='See available movies' onPress={() => navigation.goBack()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:  'center',
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  text: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1,
    marginVertical: 5
  }
})

export default memo(ListEmptyState);