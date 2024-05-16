import {useQuery} from '@tanstack/react-query';
import {getMerkers} from '@/api';
import {queryKeys} from '@/constants';
import {UseQueryCustomOptions, Marker} from '@/types';

function useGetMarkers(queryOptions?: UseQueryCustomOptions<Marker[]>) {
  return useQuery({
    queryFn: getMerkers,
    queryKey: [queryKeys.MARKER, queryKeys.GET_MARKER],
    ...queryOptions,
  });
}

export default useGetMarkers;
