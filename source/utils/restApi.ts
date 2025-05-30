import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Platform } from 'react-native';
import { AppAnyType } from '../types';
import AsyncStorageManager from './AsyncStorageManager';

// Error Response Type
export interface ErrorResponse {
  status: boolean;
  message: string;
  data?: AppAnyType;
}

axios.defaults.timeout = 30000;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['App-Track-Version'] = 'v1';
axios.defaults.headers['App-Store-Version'] = '1.1';
axios.defaults.headers['App-Device-Model'] = 'iPhone 8';
axios.defaults.headers['App-Os-Version'] = 'iOS 11';
axios.defaults.headers['App-Store-Build-Number'] = '1.1';
axios.defaults.headers['App-Secret'] = 'TESTRAVI@2204#$';
axios.defaults.headers['App-Device-Type'] = Platform.OS;

// axios.interceptors.request.use(
//   config => {
//     // if (storeManager?.stores?.authStore?.accessToken) {
//     //   config.headers.Authorization = `Bearer ${storeManager?.stores?.authStore?.accessToken}`;
//     // }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   },
// );

// axios.interceptors.response.use(
//   response => {
//     return response; // Continue with the normal flow
//   },
//   error => {
//     if (error?.response?.status === 401) {
//       // Handle unauthorized error
//     }
//     return Promise.reject(error); // Propagate the error
//   },
// );

const commonErrorResponse: ErrorResponse = {
  status: false,
  message: 'Something went wrong!',
};

let headers = {
  'Content-Type': 'application/json',
  'App-Device-Type': Platform.OS,
  'App-Track-Version': 'v1',
  'App-Store-Version': '1.1',
  'App-Device-Model': 'iPhone 8',
  'App-Os-Version': 'iOS 11',
  'App-Store-Build-Number': '1.1',
  'App-Secret': 'TESTRAVI@2204#$',
};

/**
 * Sends a POST request to the specified path with the provided body and parameters.
 *
 * @param {string} path - The API endpoint to send the POST request to.
 * @param {T} [body] - The request payload to be sent as the body of the POST request.
 * @param {AxiosRequestConfig<T>} [params] - Additional Axios request configuration options.
 * @returns {Promise<AppAnyType | ErrorResponse>} - A promise that resolves with the API response data if successful,
 * or an error response if the request fails.
 */
export async function postApi<T = unknown, D = unknown>(
  path: string,
  body?: D,
  params?: AxiosRequestConfig<D>,
): Promise<T> {
  try {
    params = {
      headers: {
        ...params?.headers,
        ...headers,
      },
    };
    const response = await axios.post<T, AxiosResponse<T>, D>(path, body, params);
    return response.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

/**
 * Sends a GET request to the specified path with the provided parameters.
 *
 * @param {string} path - The API endpoint to send the GET request to.
 * @param {T} [body] - The request payload to be sent as the body of the GET request.
 * @param {AxiosRequestConfig<T>} [params] - Additional Axios request configuration options.
 * @returns {Promise<AppAnyType | ErrorResponse>} - A promise that resolves with the API response data if successful,
 * or an error response if the request fails.
 */
export async function getApi<T>(
  path: string,
  params?: AxiosRequestConfig<T>, // Ensure this is typed as AxiosRequestConfig<T>
): Promise<AppAnyType | ErrorResponse> {
  try {
    const auth_token = await AsyncStorageManager.getData('token');
    params = {
      headers: {
        ...params?.headers,
        ...headers,
        'Auth-Token': `${auth_token}`,
      },
    };
    const response = await axios.get(path, params);
    if (response?.status === 200) {
      return response?.data;
    }
    // If the status is not success, handle it as an error
    return commonErrorResponse;
  } catch (err) {
    handleApiError(err); // Reuse the common error handler
    return commonErrorResponse;
  }
}

/**
 * Sends a PUT request to the specified path with the provided body and parameters.
 *
 * @param {string} path - The API endpoint to send the PUT request to.
 * @param {T} [body] - The request payload to be sent as the body of the PUT request.
 * @param {AxiosRequestConfig<T>} [params] - Additional Axios request configuration options.
 * @returns {Promise<AppAnyType | ErrorResponse>} - A promise that resolves with the API response data if successful,
 * or an error response if the request fails.
 */
export async function putApi<T = unknown, D = unknown>(
  path: string,
  body?: D,
  config?: AxiosRequestConfig<D>,
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.put<T, AxiosResponse<T>, D>(path, body, config);
    return response.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

/**
 * Sends a DELETE request to the specified path with the provided parameters.
 *
 * @param {string} path - The API endpoint to send the DELETE request to.
 * @param {AxiosRequestConfig<T>} [params] - Additional Axios request configuration options.
 * @returns {Promise<AppAnyType | ErrorResponse>} - A promise that resolves with the API response data if successful,
 * or an error response if the request fails.
 */
export async function deleteApi<T = unknown, D = unknown>(
  path: string,
  config?: AxiosRequestConfig<D>,
): Promise<T | ErrorResponse> {
  try {
    const response: AxiosResponse<T> = await axios.delete<T, AxiosResponse<T>, D>(path, config);
    return response.data;
  } catch (err) {
    handleApiError(err);
    return commonErrorResponse;
  }
}

export async function patchApi<T = unknown, D = unknown>(
  path: string,
  body?: D,
  config?: AxiosRequestConfig<D>,
): Promise<T | ErrorResponse> {
  try {
    const response = await axios.patch<T>(path, body, config);
    if (response?.data) {
      return response.data;
    }
    throw new Error('Invalid response');
  } catch (err) {
    handleApiError(err);
    return {
      status: false,
      message: 'Something went wrong!',
    };
  }
}

interface ErrorResponseData {
  message: string;
  [key: string]: AppAnyType; // If there are other fields
}

export const handleApiError = (err: unknown): never => {
  const axiosError = err as AxiosError<ErrorResponseData>;
  console.log('axiosErroraxiosError');
  console.log(axiosError);
  if (!axiosError?.response) {
    throw new Error('No response from server. Please check your internet connection.');
  } else {
    const errorMessage = axiosError?.response?.data?.message || 'An error occurred';
    throw new Error(errorMessage);
  }
};
