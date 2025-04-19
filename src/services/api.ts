import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Base response interface for API responses
 */
export interface ApiResponse {
  success: boolean;
  message?: string;
}

/**
 * Response type for the row count API
 */
export interface RowCountResponse extends ApiResponse {
  row_count: number;
}

/**
 * API service for interacting with the backend
 */
class ApiService {
  private api: AxiosInstance;
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:8000') {
    this.baseUrl = baseUrl;
    this.api = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      timeout: 10000, // 10 seconds timeout
    });

    // Add request interceptor for handling auth tokens if needed
    this.api.interceptors.request.use(
      (config) => {
        // You can add auth tokens here if needed
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor for handling common response patterns
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        // Handle common error scenarios
        if (error.response) {
          // Server responded with an error status code
          console.error('API Error:', error.response.status, error.response.data);
        } else if (error.request) {
          // Request was made but no response received
          console.error('API Error: No response received', error.request);
        } else {
          // Error in setting up the request
          console.error('API Error:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Generic GET request method
   */
  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.get(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Generic POST request method
   */
  async post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Generic PUT request method
   */
  async put<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.put(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Generic DELETE request method
   */
  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.delete(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Standardized error handling
   */
  private handleError(error: any): Error {
    if (axios.isAxiosError(error)) {
      // You can handle specific status codes here
      if (error.response?.status === 401) {
        // Handle unauthorized access
        return new Error('Unauthorized access. Please log in again.');
      }

      if (error.response?.data?.message) {
        return new Error(error.response.data.message);
      }

      return new Error(error.message || 'An error occurred with the API request');
    }

    return new Error('An unexpected error occurred');
  }

  /**
   * Fetches the number of rows from the API
   * @returns Promise with the row count data
   */
  async getRowCount(): Promise<RowCountResponse> {
    try {
      return await this.get<RowCountResponse>('/count-rows');
    } catch (error) {
      console.error('Failed to fetch row count:', error);
      return {
        row_count: 0,
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      };
    }
  }
}

// Export a singleton instance
const apiService = new ApiService();
export default apiService;
