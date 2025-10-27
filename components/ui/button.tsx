

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  bg?: boolean;
  outline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function Button({ children, onClick, className = "", bg = true, outline = false, size = 'md', disabled = false }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-[6px] text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
   <button 
     onClick={onClick}
     disabled={disabled}
     className={`${sizeClasses[size]} flex items-center justify-center gap-2 cursor-pointer leading-tight rounded-lg font-medium transition-all duration-200 ease-in-out focus:outline-none ${bg ? 'bg-foreground text-background hover:opacity-80' : 'text-foreground bg-transparent hover:bg-foreground/10'} ${outline ? 'border border-border shadow-xs bg-transparent text-foreground hover:bg-secondary/30' : ''} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`}
   >
     {children}
   </button>
  );
}
