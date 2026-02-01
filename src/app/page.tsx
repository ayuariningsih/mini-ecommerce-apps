"use client";

import Thumbnail from "../components/shared/Thumbnail";
import ProductImage from "../components/shared/ProductImage";
import { MdAddShoppingCart } from "react-icons/md";
import ReactStars from "react-stars";
import { Button } from "../components/ui/button";
import Divider from "../components/ui/divider";

export default function Home() {
  const defaultImage = "/placeholder-photo.webp";
  return (
    <>
      <div className="w-screen lg:h-screen flex justify-center items-center">
        <div className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-center shadow-lg rounded-lg p-8">
          <div className="flex flex-col items-center lg:w-1/2">
            <ProductImage
              defaultImage={defaultImage}
              srcImage={defaultImage}
              altImage="product-image"
            />
            <div className="flex gap-4 w-80 md:w-full flex-wrap items-center justify-center">
              <Thumbnail
                defaultImage={defaultImage}
                altImage="product-thumbnail"
                srcImage={defaultImage}
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-3 p-2 lg:p-8">
            <p className="font-extrabold text-xl text-red-500 tracking-tighter">
              SALE
            </p>
            <p className="font-bold text-2xl">{"product name nih"}</p>
            <ReactStars value={3.5} edit={false} size={24} color2={"#ffd700"} />
            <p className="font-extrabold text-3xl">{"$16.99"}</p>
            <Divider space="md" />
            <div className="flex gap-5 w-full">
              <Button
                className="w-1/2 text-md font-bold"
                onClick={() => {}}
                disabled={false}
                size={"icon-lg"}
                variant={"warning"}
              >
                <MdAddShoppingCart />
                Add to Cart
              </Button>
              <Button
                className="w-1/2 text-md font-bold"
                onClick={() => {}}
                disabled={false}
                size={"lg"}
                variant={"success"}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
