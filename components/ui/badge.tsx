

interface BadgeProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    bg?: boolean;
    hover?: boolean;
    variant?: 'default' | 'secondary' | 'destructive' | 'muted';
  }
  
  export function Badge({ children, onClick, className = "", bg = true, hover = false, variant = 'default' }: BadgeProps) {
    const getVariantClasses = () => {
      if (!bg) {
        if (hover) {
          return 'text-foreground bg-transparent ';
        }
        return 'text-foreground bg-transparent border border-foreground/20 ';
      }
      
      switch (variant) {
        case 'secondary':
          return 'bg-secondary text-foreground';
        case 'destructive':
          return 'bg-destructive text-white';
        case 'muted':
          return 'bg-muted text-foreground';
        default:
          return 'bg-foreground text-background';
      }
    };

    const getHoverClasses = () => {
      if (hover) {
        switch (variant) {
          case 'secondary':
            return 'hover:bg-secondary hover:text-foreground';
          case 'destructive':
            return 'hover:bg-destructive hover:text-white';
          case 'muted':
            return 'hover:bg-muted hover:text-foreground';
          default:
            return 'hover:bg-foreground hover:text-background';
        }
      }
      return '';
    };

    return (
     <button 
       onClick={onClick}
       className={`px-2 py-1 flex justify-center items-center gap-1 leading-tight rounded-full text-xs font-medium transition-all duration-300 ease-in-out ${getVariantClasses()} ${getHoverClasses()} ${className}`}
     >
       {children}
     </button>
    );
  }
  