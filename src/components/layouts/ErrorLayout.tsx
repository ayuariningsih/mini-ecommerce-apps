import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdRefresh } from "react-icons/md";

interface ErrorLayoutProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorLayout: React.FC<ErrorLayoutProps> = ({
  message = "Something went wrong",
  onRetry,
}) => {
  const handleRefresh = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-linear-to-b from-white to-gray-50 px-4">
      <div className="flex flex-col justify-center items-center max-w-md">
        <div className="relative w-100 100 mb-2">
          <Image
            src="/not-working.webp"
            alt="error icon"
            width={400}
            height={400}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
          Oops
        </h1>
        <p className="text-lg text-center text-gray-600 mb-4">{message}</p>
        <Button
          onClick={handleRefresh}
          variant="success"
          className="flex items-center gap-2 font-semibold"
        >
          <MdRefresh className="w-5 h-5" />
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default ErrorLayout;
