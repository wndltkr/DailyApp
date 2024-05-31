import {useMutation} from '@tanstack/react-query';

import {UseMutationCustomOptions} from '@/types';
import {uploadImages} from '@/api';

function useMutateImages(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: uploadImages,
    throwOnError: error => Number(error.response?.status) >= 500,
    ...mutationOptions,
  });
}

export default useMutateImages;
