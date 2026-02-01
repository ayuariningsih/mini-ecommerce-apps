"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

interface ThumbnailProps {
  defaultImage: string;
  altImage?: string;
  srcImage?: string;
  onSelectPreview: (index: number) => void;
  selectedProductIndex: number;
  productIndex: number;
}

const MotionButton = motion(Button);

const Thumbnail = ({
  defaultImage,
  altImage = "product-thumbnail",
  srcImage = defaultImage,
  onSelectPreview,
  selectedProductIndex,
  productIndex,
}: ThumbnailProps) => {
  return (
    <MotionButton
      whileHover={{ scale: 1.2 }}
      className={`${selectedProductIndex === productIndex ? "ring-4 ring-green-600" : "ring-0"} bg-white cursor-pointer w-16 h-16 rounded-lg transition ease-in-out duration-150 p-0`}
      onClick={() => onSelectPreview(selectedProductIndex)}
      type="reset"
    >
      <Image
        onError={(e) => {
          e.currentTarget.src = defaultImage;
        }}
        src={srcImage}
        width={80}
        height={80}
        alt={altImage}
        className="p-2"
      />
    </MotionButton>
  );
};

export default Thumbnail;
