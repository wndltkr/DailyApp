import {useQuery} from '@tanstack/react-query';

import {ResponseSinglePost, getPost} from '@/api';
import {queryKeys} from '@/constants';
import type {UseQueryCustomOptions} from '@/types';

function useGetPost(
  id: number | null,
  queryOptions?: UseQueryCustomOptions<ResponseSinglePost>,
) {
  return useQuery({
    queryFn: () => getPost(Number(id)),
    queryKey: [queryKeys.POST, queryKeys.GET_POST, id],
    enabled: Boolean(id),
    throwOnError: error => Number(error.response?.status) >= 500,
    ...queryOptions,
  });
}

export default useGetPost;
