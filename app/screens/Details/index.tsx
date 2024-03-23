import {width} from '../../utils/commons';
import Image from '../../components/Image';
import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';
import Gradient from '../../components/Gradient';
import LayoutComponent from '../../components/Layout';
import {IMAGE_HEIGHT, IMAGE_WIDTH} from '../Favorite/auxiliars/Cover';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import {AppStackScreenProps} from '../../navigators/AppNavigator';
import Icon, {Icons} from '../../components/Icons';
import {useGetDetailQuery} from '../../store/services/api';
import {useGetDetails} from '../../hooks/details';

const IMAGE =
  'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200';

interface DetailsScreenProps extends AppStackScreenProps<'Details'> {}

interface HeaderProps {
  favorite?: boolean;
  onGoBack: () => void;
  onSaveFavorite: () => void;
}

const Header = ({onSaveFavorite, onGoBack, favorite}: HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Pressable onPress={onGoBack} style={styles.button}>
        <Icon
          type={Icons.Ionicons}
          size={25}
          name={'return-up-back'}
          color={'white'}
        />
      </Pressable>
      <Pressable onPress={onSaveFavorite} style={styles.button}>
        <Icon
          type={Icons.MaterialIcons}
          size={25}
          name={'favorite'}
          color={!!favorite ? 'red' : '#777a7c'}
        />
      </Pressable>
    </View>
  );
};

const Details: React.FC<DetailsScreenProps> = ({navigation, route}) => {
  const containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  console.log('first', {
    id: route.params.id,
    type: route.params.type,
  });
  const {data, isFetching, isLoading} = useGetDetails({
    id: route.params.id,
    type: route.params.type,
  });

  if (isFetching || isLoading) {
    return (
      <LayoutComponent style={[containerInsets]}>
        <View
          style={[
            StyleSheet.absoluteFill,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </LayoutComponent>
    );
  }

  return (
    <LayoutComponent style={[containerInsets]}>
      <View style={[StyleSheet.absoluteFill]}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/' + data?.poster_path,
          }}
          style={[
            {
              width,
              height: width,
            },
          ]}
          blurRadius={20}
        />
        <Gradient />
      </View>
      <Header onGoBack={navigation.goBack} onSaveFavorite={() => {}} />

      <View
        style={{
          width: width - 40,
          marginTop: width * 0.05,
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/' + data?.poster_path,
          }}
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT - 40,
            resizeMode: 'cover',
            borderRadius: 20,
          }}
        />
      </View>
    </LayoutComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#383737',
    backgroundColor: '#1a1e25c1',
    borderRadius: 20 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default Details;
