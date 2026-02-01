'use client';

import { WavyBars } from "spinny-loader";
import SpinnyWrapper from "spinny-loader/wrapper";

const LoadingLayout = () => {
  return (
    <div className="flex h-screen justify-center items-center mx-auto">
      <SpinnyWrapper backgroundEffect={true}>
        <WavyBars />
      </SpinnyWrapper>
    </div>
  );
};

export default LoadingLayout;
