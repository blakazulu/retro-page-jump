
import React from 'react';
import { cn } from '@/lib/utils';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  glitch?: boolean;
}

const RetroButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  glitch = false,
  ...props
}: RetroButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-retro-muted text-retro-primary border-retro-primary hover:bg-black';
      case 'secondary':
        return 'bg-retro-muted text-retro-secondary border-retro-secondary hover:bg-black';
      case 'accent':
        return 'bg-retro-muted text-retro-accent border-retro-accent hover:bg-black';
      default:
        return 'bg-retro-muted text-retro-primary border-retro-primary hover:bg-black';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-[8px] px-2 py-1';
      case 'md':
        return 'text-[12px] px-3 py-2';
      case 'lg':
        return 'text-[16px] px-4 py-3';
      default:
        return 'text-[12px] px-3 py-2';
    }
  };

  return (
    <button
      className={cn(
        'pixel-button',
        getVariantClasses(),
        getSizeClasses(),
        glitch && 'hover:animate-glitch',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default RetroButton;
