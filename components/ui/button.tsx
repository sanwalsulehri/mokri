

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  bg?: boolean;
  outline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, onClick, className = "", bg = true, outline = false, size = 'md', disabled = false, type = 'button' }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-[7px] text-sm gap-1',
    md: 'px-4 py-2 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
    xl: 'px-6 py-2.5 text-base gap-3'
  };

  // Check if className contains custom background colors
  const hasCustomBg = className.includes('bg-');
  
  // Build default classes based on props
  let defaultClasses = '';
  if (bg && !hasCustomBg) {
    defaultClasses = 'bg-foreground text-background hover:opacity-80';
  } else if (!bg && !hasCustomBg) {
    defaultClasses = 'text-foreground bg-transparent hover:bg-foreground/10';
  } else if (!bg && hasCustomBg) {
    // Custom background: only add text color if not in className
    defaultClasses = className.includes('text-') ? '' : 'text-foreground';
  }
  
  if (outline && !hasCustomBg) {
    defaultClasses = 'border border-border shadow-xs bg-transparent hover:bg-muted';
  }

  return (
   <button 
     type={type}
     onClick={onClick}
     disabled={disabled}
     className={`${sizeClasses[size]} flex font-medium items-center justify-center  cursor-pointer leading-tight rounded-lg font-medium transition-all duration-200 ease-in-out focus:outline-none ${defaultClasses} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`}
   >
     {children}
   </button>
  );
}
