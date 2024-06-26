import {useMutation} from '@tanstack/react-query';

import {deletePost} from '@/api/post';
import {Marker, UseMutationCustomOptions} from '@/types';
import queryClient from '@/api/queryClient';
import {queryKeys} from '@/constants';

function useMutateDeletePost(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: deletePost,
    onSuccess: deletedId => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_CALENDAR_POSTS],
      });
      //   queryClient.setQueryData<Marker[]>(
      //     [queryKeys.MARKER, queryKeys.GET_MARKERS],
      //     existingMarkers => {
      //       return existingMarkers?.filter(marker => marker.id !== deletedId);
      //     },
      //   );
    },
    throwOnError: error => Number(error.response?.status) >= 500,
    ...mutationOptions,
  });
}

export default useMutateDeletePost;
