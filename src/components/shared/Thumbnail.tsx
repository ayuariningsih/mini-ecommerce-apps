"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

interface ThumbnailProps {
  defaultImage: string;
  altImage?: string;
  srcImage?: string;
}

const MotionButton = motion(Button);

const Thumbnail = ({ defaultImage, altImage = "product-thumbnail", srcImage = defaultImage }: ThumbnailProps) => {
  
  return (
    <div className="flex gap-4 w-80 md:w-full flex-wrap items-center justify-center">
      <MotionButton
        whileHover={{ scale: 1.2 }}
        key={"item.id"}
        className={`${"ring-4 ring-green-600"} bg-white cursor-pointer w-16 h-16 rounded-lg transition ease-in-out duration-150 p-0`}
        onClick={() => {}}
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
    </div>
  );
};

export default Thumbnail;
