import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  header?: ReactNode; // Slot para o ícone ou texto de topo
  color: string;
  width: string;
  height: string;
};

export function Card({ color, children, width, height, header }: Props) {
  const colorVariants: Record<string, string> = {
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-500",
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    red: "border-red-500/30 bg-red-500/10 text-red-500",
    explanation: "border-purple-500/30 bg-purple-900/10 text-white",
  };

  return (
    <div className={`
        flex justify-center items-center flex-col border rounded-2xl p-6
        ${colorVariants[color] || colorVariants.purple}
        ${width} ${height}
    `}>
     
      {header && (
        <div className="mb-3 flex flex-col items-center gap-1">
          {header}
        </div>
      )}

      {children}
    </div>
  );
}