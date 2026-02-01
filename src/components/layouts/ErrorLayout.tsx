import * as React from "react";
import Image from "next/image";

interface ErrorLayoutProps {
  message: string;
}

const ErrorLayout: React.FC<ErrorLayoutProps> = ({ message }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          className="dark:invert"
          src="/error-illustration.webp"
          alt="error icon"
          width={450}
          height={450}
          priority
        />
        <p className="font-extrabold text-xl mt-8 text-center">{message}</p>
      </div>
    </>
  );
};

export default ErrorLayout;
