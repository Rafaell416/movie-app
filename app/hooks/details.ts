import {useSelector} from 'react-redux';
import {useGetDetailQuery} from '../store/services/api';
import {detailSelector} from '../store/result/selector';
import {RootState} from '../store';
import {useMemo} from 'react';

export const useGetDetails = (params: {
  id: number;
  type: Trending['media_type'];
}) => {
  const {isLoading, isFetching} = useGetDetailQuery({
    id: params.id,
    type: params.type,
  });

  const data = useSelector((state: RootState) =>
    detailSelector(state, {
      id: params.id,
      type: params.type,
    }),
  );

  return useMemo(
    () => ({
      data,
      isLoading,
      isFetching,
    }),
    [data, isLoading, isFetching],
  );
};
