"use client";

import Thumbnail from "../components/shared/Thumbnail";
import ProductImage from "../components/shared/ProductImage";
import { ProductDetails } from "../components/shared/ProductDetails";
import { useGetProducts } from "../providers/api/getProducts";
import { Product } from "../providers/types/products";
import { useState } from "react";
import ErrorLayout from "../components/layouts/ErrorLayout";
import LoadingLayout from "../components/layouts/LoadingLayout";

export default function Home() {
  const defaultImage = "/placeholder-photo.webp";
  const { data, isLoading, isError, error, refetch } = useGetProducts();

  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);
  const [productImagesIndex, setProductImagesIndex] = useState<number>(0);

  const defaultProduct: Product = {
    id: "100",
    images: [{ url: defaultImage, id: "100" }],
    name: "",
    price: "-",
    badge: "",
    rating: 0,
  };

  const productData = data?.data ?? [];

  const selectedProductData: Product =
    productData?.[selectedProductIndex] ?? defaultProduct;

  const onPrevImagePreview = () => {
    if (productImagesIndex > 0) setProductImagesIndex(productImagesIndex - 1);
  };
  const onNextImagePreview = () => {
    if (productImagesIndex + 1 < selectedProductData?.images?.length)
      setProductImagesIndex(productImagesIndex + 1);
  };
  const onSelectImageToPreview = (index: number) => {
    setSelectedProductIndex(index);
    setProductImagesIndex(0);
  };

  const handleRetry = () => {
    refetch();
  };

  if (isError)
    return (
      <ErrorLayout
        message={error?.message ?? "Looks something went wrong."}
        onRetry={handleRetry}
      />
    );

  return isLoading ? (
    <LoadingLayout />
  ) : (
    <div className="w-screen lg:h-screen flex justify-center items-center">
      <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:flex-row justify-center shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center gap-2 lg:w-1/2">
          <ProductImage
            defaultImage={defaultImage}
            srcImage={selectedProductData.images[productImagesIndex]?.url}
            altImage="product-image"
            productImagesIndex={productImagesIndex}
            selectedProductData={selectedProductData}
            onPrevImage={onPrevImagePreview}
            onNextImage={onNextImagePreview}
          />
          <div className="flex gap-4 w-80 md:w-full flex-wrap items-center">
            {data?.data.map((item, index) => (
              <Thumbnail
                key={item.id}
                defaultImage={defaultImage}
                altImage="product-thumbnail"
                srcImage={item.images[0]?.url ?? defaultImage}
                onSelectPreview={() => onSelectImageToPreview(index)}
                selectedProductIndex={selectedProductIndex}
                productIndex={index}
              />
            ))}
          </div>
        </div>
        <ProductDetails
          saleLabel={selectedProductData.badge}
          productName={selectedProductData.name}
          rating={selectedProductData.rating}
          price={selectedProductData.price}
          onAddToCart={() => {}}
          onBuyNow={() => {}}
        />
      </div>
    </div>
  );
}
