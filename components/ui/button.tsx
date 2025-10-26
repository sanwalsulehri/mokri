

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  bg?: boolean;
}

export function Button({ children, onClick, className = "", bg = true }: ButtonProps) {

  return (
   <button 
     onClick={onClick}
     className={`px-3 py-[6px] flex items-center gap-2 cursor-pointer leading-tight rounded-lg text-sm font-medium  transition-all duration-200 ease-in-out  ${bg ? 'bg-foreground text-background hover:opacity-80' : 'text-foreground bg-transparent hover:bg-foreground/10'} ${className}`}
   >
     {children}
   </button>
  );
}
