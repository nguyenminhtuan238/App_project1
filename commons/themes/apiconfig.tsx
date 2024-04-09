import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const getUserToken = async () => {
  const envTOKEN: string = process.env.EXPO_PUBLIC_TOKEN!;
  const token = await AsyncStorage.getItem(envTOKEN);
  if (token) {
    return token;
  }
};
const ApiServices = axios.create({
  baseURL: process.env.EXPO_PUBLIC_IMAGEUSERd,
});
ApiServices.interceptors.request.use(
  async (config) => {
    const token = await getUserToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Length'] = 'application/json';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

ApiServices.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default ApiServices;
