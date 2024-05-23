import {UseMutationCustomOptions} from '@/types';
import {useMutation} from '@tanstack/react-query';
import {updateFavoritePost} from '@/api';
import queryClient from '@/api/queryClient';
import {queryKeys} from '@/constants';

function useMutateFavoritePost(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: updateFavoritePost,
    onSuccess: updatedId => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POST, updatedId],
      });
      queryClient.invalidateQueries({
        queryKey: [
          queryKeys.POST,
          queryKeys.FAVORITE,
          queryKeys.GET_FAVORITE_POSTS,
        ],
      });
    },
    ...mutationOptions,
  });
}

export default useMutateFavoritePost;
