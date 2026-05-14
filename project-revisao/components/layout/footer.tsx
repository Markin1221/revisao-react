import { ReactNode } from "react";

type Props = {
  children?: ReactNode; // Slot para o texto ou links personalizados
};

export function Footers({ children }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 border-t border-purple-500/10 flex flex-col items-center justify-center">
      <div className="text-gray-500 text-sm flex items-center gap-1">
        <span>© {currentYear}</span>
        {children ? (
          children
        ) : (
          <span>Meu Blog. Todos os direitos reservados.</span>
        )}
      </div>
    </footer>
  );
}