import axiosInstance from "./axiosConfig";

//GET all post
export const getAllPost = async (skip: number, take: number) => {
  const response = await axiosInstance.get("/posts", {
    params: {
        skip,
        take
    }
  });
  return response.data;
};

//GET one post
export const getPostById = async (id: string) => {
  const response = await axiosInstance.get(`/post/${id}`);
  return response.data;
};

//GET post by type scholarship | internship
export const getPostsByCategoryType = async (
  type: string,
  skip: number,
  take: number
) => {
  const response = await axiosInstance.get(`/api/posts/category/${type}`, {
    params: {
      skip,
      limit: take,
    },
  });
  return response.data;
};

// Create Post
export const createPost = async (
  title: string,
  thumbnail: string,
  type: string,
  content: String
) => {
  const response = await axiosInstance.post("/post/create", {
    title,
    thumbnail,
    type,
    content,
  });
  return response.data;
};

//Delete Post
export const deletePost = async (id: string): Promise<void> => {
  const response = await axiosInstance.post(`/posts/${id}/remove`);
  return response.data;
};
