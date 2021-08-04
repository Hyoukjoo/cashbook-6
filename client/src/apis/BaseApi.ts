import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import env from "config/env";

export default class BaseApi {
  private instance: AxiosInstance;

  constructor(path: string) {
    const url = new URL(`api/${path}`, env.api.URL);

    this.instance = axios.create({
      baseURL: url.href,
    });
  }

  protected get<DTO = any>(path: string, config?: AxiosRequestConfig) {
    return this.instance.get<DTO>(path, config);
  }

  protected post<DTO = any>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.instance.post<DTO>(path, data, config);
  }

  protected put<DTO = any>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.instance.put<DTO>(path, data, config);
  }

  protected delete<DTO = any>(path: string, config?: AxiosRequestConfig) {
    return this.instance.delete<DTO>(path, config);
  }
}
