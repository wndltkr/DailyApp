import axiosInstance from "@/api/axios";


const uploadImages = async (body: FormData): Promise<string[]> => {
  const {data} = await axiosInstance.post('/images', body, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });

  return data;
};

export {uploadImages};
