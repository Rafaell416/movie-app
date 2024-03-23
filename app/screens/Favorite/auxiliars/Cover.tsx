import {View} from 'react-native';
import {width} from '../../../utils/commons';
import Image from '../../../components/Image';
import {useGetFavorite} from '../../../hooks/favorite';

export const IMAGE_WIDTH = width * 0.7;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 1.54;

interface CoverProps {
  id: number;
}

const Cover = ({id}: CoverProps) => {
  const favorite = useGetFavorite(id);

  return (
    <View
      style={{
        width: width - 40,
        marginTop: width * 0.3,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/' + favorite?.poster_path,
        }}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          resizeMode: 'cover',
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default Cover;
