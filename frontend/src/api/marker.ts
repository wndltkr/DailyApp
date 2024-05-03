import axiosInstance from '@/api/axios';
import {Marker} from '@/types/domain';

const getMerkers = async (): Promise<Marker[]> => {
  const {data} = await axiosInstance.get('./markers/my');

  return data;
};

export {getMerkers};
