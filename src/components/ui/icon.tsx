import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const iconVariants = cva('', {
  variants: {
    size: {
      xs: 'w-3 h-3',
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
    },
  },
  compoundVariants: [{ size: 'medium' }],
  defaultVariants: {
    size: 'medium',
  },
});

interface IconProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof iconVariants> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function Icon({ icon, size, className, ...props }: IconProps) {
  const Element = icon;
  return (
    <Element
      className={twMerge(clsx(iconVariants({ size }), className))}
      {...props}
    />
  );
}

export default Icon;
