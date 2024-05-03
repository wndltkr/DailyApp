import axiosInstance from '@/api/axios';
import {ImageUri, Post} from '@/types/domain';

type ResponsePost = Post & {images: ImageUri[]};

type RequestCreatePost = Omit<Post, 'id'> & {imageUris: ImageUri[]};

const createPost = async (body: RequestCreatePost): Promise<ResponsePost> => {
  const {data} = await axiosInstance.post('./post', body);

  return data;
};

export {createPost}
export type {ResponsePost, RequestCreatePost}