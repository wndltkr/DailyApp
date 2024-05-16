import {UseMutationCustomOptions, Marker} from '@/types';
import {useMutation} from '@tanstack/react-query';
import {createPost} from '@/api';
import queryClient from '@/api/queryClient';
import {queryKeys} from '@/constants';

function useMuatateCreatePost(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: createPost,
    ...mutationOptions,
    onSuccess: newPost => {
      // queryClient.invalidateQueries({
      //   queryKey: [queryKeys.MARKER, queryKeys.GET_MARKER],
      // });

      queryClient.setQueryData<Marker[]>(
        [queryKeys.MARKER, queryKeys.GET_MARKER],
        existingMarkers => {
          const newMarker = {
            id: newPost.id,
            latitude: newPost.latitude,
            longitude: newPost.longitude,
            color: newPost.color,
            score: newPost.score,
          };

          return existingMarkers
            ? [...existingMarkers, newMarker]
            : [newMarker];
        },
      );
    },
    ...mutationOptions,
  });
}

export default useMuatateCreatePost;
