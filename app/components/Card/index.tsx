import Image from '../Image';
import {useCallback} from 'react';
import Pressable from '../Pressable';
import {useGetTrendingType} from '@app/hooks/home';
import {ResultState} from '@app/store/result';
import {Dimensions, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const {width} = Dimensions.get('window');
import FavoriteButton from '../FavoriteButton';

const COLUMN_GAP = 20;
const COLUMN = 2;
const SPACE = 40;

const CardComponent = (props: {id: number; type: keyof ResultState}) => {
  const navigation =
  useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const data = useGetTrendingType(props);

  const onNavigate = useCallback(() => {
    navigation.navigate('Details', {
      id: props.id,
      type: (data as Trending)?.media_type,
    });
  }, [(data as Trending)?.media_type]);

  return (
    <View testID={`movieCard-${props.id}`}>
      <Pressable onPress={onNavigate}>
        <Image
          contentContainerStyle={[styles.container, styles.shadow]}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 10,
          }}
          source={{uri: 'https://image.tmdb.org/t/p/w500/' + data?.poster_path}}
        />
      </Pressable>
      <View style={styles.buttonContainer}>
        <FavoriteButton data={data}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width - SPACE) / COLUMN - COLUMN_GAP,
    aspectRatio: 0.9,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1a1e25',
  },
  shadow: {
    backgroundColor: '#1a1e25',
    shadowColor: '#1a1e25',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.22,
    elevation: 9,
  },
  buttonContainer: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});

export default CardComponent;
