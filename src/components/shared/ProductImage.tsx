import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Icon from "../ui/icon";
import { Product } from "@/src/providers/types/products";

interface ProductImageProps {
  defaultImage: string;
  altImage?: string;
  srcImage?: string;
  productImagesIndex: number;
  selectedProductData: Product;
  onPrevImage: () => void;
  onNextImage: () => void;
}

const ProductImage = ({
  defaultImage,
  altImage = "product-image",
  srcImage = defaultImage,
  productImagesIndex,
  selectedProductData,
  onPrevImage,
  onNextImage,
}: ProductImageProps) => {
  return (
    <div className="relative bg-white shadow-lg mb-12 rounded-lg h-96 w-full flex items-center justify-center">
      <Image
        onError={(e) => {
          e.currentTarget.src = defaultImage;
        }}
        fill
        className="mb-8 max-h-90 max-w-90 bg-cover object-contain absolute inset-0 m-auto"
        src={srcImage}
        alt={altImage}
        preload
      />
      <div className="absolute right-2 bottom-4 flex items-center justify-center font-bold gap-2">
        <Icon
          onClick={onPrevImage}
          icon={IoMdArrowDropleft}
          className="self-center w-6 h-6 cursor-pointer"
        />
        <p>
          {productImagesIndex + 1 + " / " + selectedProductData.images.length}
        </p>
        <Icon
          onClick={onNextImage}
          icon={IoMdArrowDropright}
          className="self-center w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductImage;
