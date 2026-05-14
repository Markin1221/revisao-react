import { Headers } from "@/components/layout/Headers";
import Link from "next/link";

export default function blog(){
    return <div>
        <Headers>
            <Link href="/blog">blog</Link>
            <Link href="/">sobre mim</Link>
        </Headers>
        <h1>voce esta na pagina do blog</h1>
        
    </div>
    
}