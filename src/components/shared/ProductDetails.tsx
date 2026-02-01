import dynamic from "next/dynamic";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";
import Divider from "../ui/divider";

const ReactStars = dynamic(() => import("react-stars"), { ssr: false });
interface ProductDetailsProps {
  saleLabel?: string;
  productName: string;
  rating: number;
  price: string;
  onAddToCart: () => void;
  onBuyNow?: () => void;
}

export const ProductDetails = ({
  saleLabel = "SALE",
  productName,
  rating,
  price,
  onAddToCart,
  onBuyNow,
}: ProductDetailsProps) => {
  return (
    <div className="lg:w-1/2 flex flex-col gap-3 p-2 lg:p-8">
      <p className="font-extrabold text-lg text-red-500 tracking-tighter">
        {saleLabel}
      </p>
      <p className="font-bold text-2xl">{productName}</p>
      <ReactStars value={rating} edit={false} size={24} color2={"#ffd700"} />
      <p className="font-extrabold text-3xl">{`$${price}`}</p>
      <Divider space="md" />
      <div className="flex gap-5 w-full">
        <Button
          className="w-1/2 text-md font-bold"
          onClick={onAddToCart}
          disabled={false}
          size={"icon-lg"}
          variant={"warning"}
        >
          <MdAddShoppingCart />
          Add to Cart
        </Button>
        <Button
          className="w-1/2 text-md font-bold"
          onClick={onBuyNow}
          disabled={false}
          size={"lg"}
          variant={"success"}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};
