import React from "react";
import { Product } from "./products";
declare module "react-rating-stars-component";

export interface WithChildren {
  children: React.ReactNode;
}
export type APIResponse<T = Product> = {
  status: string;
  data: T[];
};
