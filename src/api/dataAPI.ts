import { instance } from "./instance"


export const dataAPI = {
  getUsers: async () => {
    const response = await instance.get('/users');
    return response.data;
  },

  getPosts: async (userId: number) => {
    const response = await instance.get(`/posts?userId=${userId}`);
    return response.data;
  },

  getAlbums: async (userId: number) => {
    const response = await instance.get(`/albums?userId=${userId}`);
    return response.data;
  }
}