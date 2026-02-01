import { AxiosRequestConfig } from "axios";
import axios from "axios";
import { APIResponse } from "../providers/types";

export const config = {
  apiURL: "/api",
};

export const GET = async <T = APIResponse>(
  url: string,
  headers?: { [key: string]: string },
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  const { data } = await axios.get(url, {
    ...(config ?? {}),
    headers,
  });
  return data;
};
