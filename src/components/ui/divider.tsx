import clsx from 'clsx';

interface DividerProps {
  space?: 'sm' | 'md' | 'xl';
  className?: string;
}

function Divider({ className, space }: DividerProps) {
  return (
    <hr
      className={clsx('w-full border-gray-200 border-t h-0.5 bg-gray-200', className, {
        'my-2': space == 'sm',
        'my-4': space == 'md',
        'my-6': space == 'xl',
      })}
    />
  );
}

export default Divider;
