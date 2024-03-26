import {verticalScale, width} from '@app/utils/commons';
import Image from '@app/components/Image';
import {ActivityIndicator, Pressable, StyleSheet, View, StyleProp, TextStyle} from 'react-native';
import Gradient from '@app/components/Gradient';
import LayoutComponent from '@app/components/Layout';
import {IMAGE_HEIGHT, IMAGE_WIDTH} from '../Favorite/auxiliars/Cover';
import {useSafeAreaInsetsStyle} from '@app/utils/useSafeAreaInsetsStyle';
import {AppStackScreenProps} from '../../navigators/AppNavigator';
import Icon, {Icons} from '@app/components/Icons';
import {useGetDetailQuery} from '@app/store/services/api';
import {useGetDetails} from '@app/hooks/details';
import Text from '@app/components/Text';
import { FadeIn, FadeOut } from "react-native-reanimated";
import { moderateScale } from '@app/utils/commons';
import { colors } from '@app/theme/colors';

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

const FadingText = ({ text, style }: {text: string | number, style: StyleProp<TextStyle>}) => (
  <Text
    style={style}
    entering={FadeIn.delay(150).duration(1000)}
    exiting={FadeOut}
  >
    {text}
  </Text>
);

const Details: React.FC<DetailsScreenProps> = ({navigation, route}) => {
  const containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const {data, isFetching, isLoading} = useGetDetails({
    id: route.params.id,
    type: route.params.type,
  });

  console.log({data})

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
      <View style={styles.textContainer}>
        <FadingText text={data?.title} style={styles.title}/>
      </View>
      <View style={styles.textContainer}>
        <FadingText text={data.overview} style={styles.overview}/>
      </View>
      <View style={styles.textContainer}>
        <FadingText text={"★"} style={styles.vote_average}/>
        <FadingText text={data.vote_average} style={styles.vote_average}/>
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
  textContainer: {
    width: '100%',
    paddingVertical: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: moderateScale(18), 
    color: 'white',
    letterSpacing: 2,
    fontWeight: '700',
    textAlign: 'center'
  },
  overview: {
    color: 'white',
    textAlign: 'justify',
    fontWeight: '300',
    letterSpacing: 1
  },
  vote_average: {
    color: 'white',
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    fontSize: 12,
    marginBottom: 5
  }
});

export default Details;
