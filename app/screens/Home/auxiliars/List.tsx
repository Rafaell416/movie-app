import {FlatList, FlatListProps, View} from 'react-native';

interface ListProps extends FlatListProps<any> {}

const List = (props: ListProps) => {
  return (
    <FlatList
      {...props}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{
        paddingHorizontal: 5,
        paddingVertical: 40,
      }}
      columnWrapperStyle={{
        gap: 20,
        marginBottom: 40,
        justifyContent: 'space-between',
      }}
    />
  );
};

export default List;
