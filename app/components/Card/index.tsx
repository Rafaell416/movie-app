import Image from '../Image';
import {useCallback} from 'react';
import Icon, {Icons} from '../Icons';
import Pressable from '../Pressable';
import {useGetTradingType} from '../../hooks/home';
import {ResultState} from '../../store/trending/trending';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useFavoriteActions, useGetLike} from '../../hooks/favorite';
const {width} = Dimensions.get('window');

const COLUMN_GAP = 20;
const COLUMN = 2;
const SPACE = 40;

const CardComponent = (props: {id: number; type: keyof ResultState}) => {
  const data = useGetTradingType(props);
  const {actions} = useFavoriteActions();

  const onLike = useCallback((data: Movie | Trending | TvShow) => {
    actions.setFavorite(data);
  }, []);

  const favorite = useGetLike(props.id);

  return (
    <View>
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
      <Pressable
        onPress={onLike}
        onPressParams={data}
        style={styles.containerFavorite}>
        <Icon
          type={Icons.MaterialIcons}
          size={20}
          name={!!favorite ? 'favorite' : 'favorite-outline'}
          color={!!favorite ? 'red' : '#777a7c'}
        />
      </Pressable>
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
  containerFavorite: {
    borderWidth: 1,
    borderColor: '#383737',
    backgroundColor: '#1a1e25c1',
    position: 'absolute',
    right: 5,
    top: 5,
    borderRadius: 20 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default CardComponent;
