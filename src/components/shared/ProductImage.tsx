"use client";

import React from "react";
import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Icon from "../ui/icon";

interface ProductImageProps {
  defaultImage: string;
  altImage?: string;
  srcImage?: string;
}

const ProductImage = ({ defaultImage, altImage = "product-image", srcImage = defaultImage }: ProductImageProps) => {
  return (
    <div className="relative bg-white shadow-lg mb-12 rounded-lg h-96 w-full flex items-center justify-center">
      <Image
        onError={(e) => {
          e.currentTarget.src = defaultImage;
        }}
        className="mb-8"
        src={srcImage}
        width={360}
        height={360}
        alt={altImage}
      />
      <div className="absolute right-2 bottom-4 flex items-center justify-center font-bold gap-2">
        <Icon
          onClick={() => {}}
          icon={IoMdArrowDropleft}
          className="self-center w-6 h-6 cursor-pointer"
        />
        <p>{0 + 1 + " / " + 2}</p>
        <Icon
          onClick={() => {}}
          icon={IoMdArrowDropright}
          className="self-center w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductImage;
