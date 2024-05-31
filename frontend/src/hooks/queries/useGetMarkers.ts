import {useQuery} from '@tanstack/react-query';

import {getMarkers} from '@/api';
import {queryKeys} from '@/constants';
import type {Marker, UseQueryCustomOptions} from '@/types';

function useGetMarkers(queryOptions?: UseQueryCustomOptions<Marker[]>) {
  return useQuery({
    queryFn: getMarkers,
    queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
    throwOnError: error => Number(error.response?.status) >= 500,
    ...queryOptions,
  });
}

export default useGetMarkers;
