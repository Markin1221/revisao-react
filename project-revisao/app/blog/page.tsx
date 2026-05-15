import { Headers } from "@/components/layout/Headers";
import { Hero } from "@/components/features/hero";
import { Posts } from "@/components/features/posts";

import Link from "next/link";

export default function blog(){
    return <div>
        <Headers>
            <Link href="/blog">blog</Link>
            <Link href="/">sobre mim</Link>
        </Headers>
        <Hero 
          title="Blog"
          subtitle="Histórias, reflexões e perrengues da vida" 
        />
        
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
  <Posts
  id={1}
  title="Meu primeiro post"
  tag="React"
  preview="Aprendendo componentização no Next.js"
  date={new Date()}
  rate={5}
  commentsCount={12}
  image="/posts/amor.jpg"
/>
</div>
        <h1>voce esta na pagina do blog</h1>
        
    </div>
    
}