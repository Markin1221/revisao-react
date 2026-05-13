import { Unica_One } from "next/font/google";

const unica = Unica_One({
  subsets: ["latin"],
  weight: "400",
});

export function Headers() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-sm h-20 flex justify-center items-center gap-380">
      <div>
        <h3 className={`${unica.className} text-[24px]`}>
          markin blog
        </h3>
      </div>

      <div className="flex justify-center items-center gap-12">
        <h3 className={`${unica.className} text-[24px]`}><a href="/blog">blog</a></h3>
        <h3 className={`${unica.className} text-[24px]`}><a href="/">sobre mim</a></h3>
      </div>
    </header>
  );
}