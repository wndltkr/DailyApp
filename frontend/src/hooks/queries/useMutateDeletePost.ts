import {Marker, UseMutationCustomOptions} from '@/types';
import {useMutation} from '@tanstack/react-query';
import queryClient from '@/api/queryClient';
import {queryKeys} from '@/constants';
import {deletePost} from '@/api';
import {request} from "react-native-permissions";

function useMutateDeletePost(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: deletePost,
    onSuccess: deleteId => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
      });
      // queryClient.setQueryData<Marker[]>(
      //   [queryKeys.MARKER, queryKeys.GET_MARKERS],
      //   existingMarkers => {
      //     return existingMarkers?.filter(marker => marker.id !== deleteId);
      //   },
      // );
    },
    ...mutationOptions,
  });
}

export default useMutateDeletePost;
