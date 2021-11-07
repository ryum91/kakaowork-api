import axios, { AxiosRequestConfig } from 'axios';

const { KAKAOWORK_BOT_API_KEY } = process.env;

const BASE_URL = 'https://api.kakaowork.com';

export const request = <T>(options?: Exclude<AxiosRequestConfig, 'baseURL' | 'headers'>) => {
  return axios
    .request<T>({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${KAKAOWORK_BOT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      ...options
    })
    .then(({ data }) => data);
};
