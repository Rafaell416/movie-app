import List from '../auxiliars/List';
import CardComponent from '../../../components/Card';
import {useGetTrendingTvShow} from '../../../hooks/home';

const TV: React.FC = () => {
  const {data, isFetching, isLoading, refetch} = useGetTrendingTvShow();

  return (
    <List
      data={data}
      onRefresh={refetch}
      refreshing={isFetching || isLoading}
      renderItem={({item}) => {
        return <CardComponent id={item} type="tv" />;
      }}
    />
  );
};

export default TV;
