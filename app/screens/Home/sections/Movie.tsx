import List from '../auxiliars/List';
import CardComponent from '../../../components/Card';
import {useGetTrendingMovie} from '../../../hooks/home';

const Movie: React.FC = () => {
  const {data, isFetching, isLoading, refetch} = useGetTrendingMovie();

  return (
    <List
      data={data}
      onRefresh={refetch}
      refreshing={isFetching || isLoading}
      renderItem={({item}) => {
        return <CardComponent id={item} type="movie" />;
      }}
    />
  );
};

export default Movie;
