import { config, GET } from "@/src/lib/axios";
import { QueryConfig } from "@/src/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { APIResponse } from "../types";
import { Product } from "../types/products";

export const getProducts = (): Promise<APIResponse<Product>> => {
  return GET(`${config.apiURL}/products`);
};

export const getProductsQueryKey = () => ["products"];

export const getProductsQueryOptions = () => {
  return queryOptions<APIResponse<Product>>({
    queryKey: getProductsQueryKey(),
    queryFn: getProducts,
  });
};

type UseGetProductsParams = {
  queryConfig?: QueryConfig<typeof getProductsQueryOptions>;
};

export const useGetProducts = (params: UseGetProductsParams = {}) => {
  return useQuery({
    ...getProductsQueryOptions(),
    ...params.queryConfig,
  });
};
