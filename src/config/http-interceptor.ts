import { AxiosInstance } from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 60 * 60 * 1000, // in milliseconds (60 minutes)
});

export const setAxiosInterceptors = (axios: AxiosInstance) => {
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      config.adapter = cache.adapter;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
};
