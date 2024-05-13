import axiosInstance from '@/api/axios';
import {ImageUri, Post} from '@/types/domain';

type ResponsePost = Post & {images: ImageUri[]};

type RequestCreatePost = Omit<Post, 'id'> & {imageUris: ImageUri[]};

const createPost = async (body: RequestCreatePost): Promise<ResponsePost> => {
  const {data} = await axiosInstance.post('./post', body);

  return data;
};

type ResponseSinglePost = ResponsePost & {isFavorite: boolean};

const getPost = async (id: number): Promise<ResponseSinglePost> => {
  const {data} = await axiosInstance.get(`/post/${id}`);

  return data;
};

export {createPost, getPost};
export type {ResponsePost, RequestCreatePost, ResponseSinglePost};
