
import React from 'react';
import { cn } from '@/lib/utils';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'cyberpunk' | 'neon-red';
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
      case 'cyberpunk':
        return 'bg-[#1A1F2C] text-[#8B5CF6] border-[#403E43] hover:bg-black hover:border-[#D6BCFA] hover:text-[#D6BCFA] hover:shadow-[0_0_8px_#8B5CF6] disabled:opacity-50 disabled:hover:shadow-none disabled:hover:border-[#403E43] disabled:hover:text-[#6E59A5] transition-all duration-150';
      case 'neon-red':
        return 'bg-black text-[#c22a30] border-[#c22a30] hover:bg-[#12080a] hover:border-[#ff3c44] hover:text-[#ff3c44] hover:shadow-[0_0_12px_#c22a30] disabled:opacity-50 disabled:hover:shadow-none disabled:hover:border-[#c22a30] disabled:hover:text-[#951f24] transition-all duration-150';
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
