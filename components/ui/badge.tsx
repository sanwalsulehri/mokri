

interface BadgeProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    bg?: boolean;
    variant?: 'default' | 'secondary' | 'destructive' | 'muted';
  }
  
  export function Badge({ children, onClick, className = "", bg = true, variant = 'default' }: BadgeProps) {
    const getVariantClasses = () => {
      if (!bg) {
        return 'text-foreground bg-transparent border border-foreground/20 ';
      }
      
      switch (variant) {
        case 'secondary':
          return 'bg-secondary text-white';
        case 'destructive':
          return 'bg-destructive text-white';
        case 'muted':
          return 'bg-muted text-white';
        default:
          return 'bg-foreground text-background';
      }
    };

    return (
     <button 
       onClick={onClick}
       className={`px-2 py-1 flex items-center gap-1 leading-tight rounded-full text-xs font-medium transition-all duration-200 ease-in-out ${getVariantClasses()} ${className}`}
     >
       {children}
     </button>
    );
  }
  