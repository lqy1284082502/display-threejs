import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpRequest {
  private readonly baseUrl: string;
  private _url: string | undefined;
  constructor() {
    this.baseUrl = 'http://localhost:3000';
  }
  getInsideConfig() {
    return {
      baseURL: this.baseUrl,
      headers: {
        //
      },
    };
  }

  // 请求拦截
  interceptors(instance: AxiosInstance, url: string | undefined) {
    this._url = url;
    instance.interceptors.request.use(
      (config) => {
        // 添加全局的loading..
        // 请求头携带token
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
    //响应拦截
    instance.interceptors.response.use(
      (res) => {
        //返回数据
        const { data } = res;
        console.log('返回数据处理', res);
        return data;
      },
      (error: any) => {
        console.log('error==>', error);
        return Promise.reject(error);
      }
    );
  }

  request(options: AxiosRequestConfig) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

const http = new HttpRequest();
export default http;
