import { Unica_One } from "next/font/google";

const unica = Unica_One({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  children: React.ReactNode;
};

export function Headers({ children }: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-sm h-20 flex justify-between items-center px-6 md:px-20">
      
      
      <h1 className={`${unica.className} text-[20px] md:text-[24px] whitespace-nowrap`}>
        markin blog
      </h1>

      
      <nav className={`${unica.className} flex gap-4 md:gap-12 text-[18px] md:text-[24px]`}>
        {children}
      </nav>

    </header>
  );
}