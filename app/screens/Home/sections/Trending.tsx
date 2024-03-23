import List from '../auxiliars/List';
import CardComponent from '../../../components/Card';
import {useGetTrendingAll} from '../../../hooks/home';

const Trending: React.FC = () => {
  const {data, isFetching, isLoading, refetch} = useGetTrendingAll();

  return (
    <List
      data={data}
      onRefresh={refetch}
      refreshing={isFetching || isLoading}
      renderItem={({item}) => {
        return <CardComponent id={item} type="trending" />;
      }}
    />
  );
};

export default Trending;
