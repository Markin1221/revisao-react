import Link from "next/link";
import { Headers } from "@/components/layout/Headers";
import { Hero } from "@/components/features/hero";
import { Card } from "@/components/ui/Card";
import { Footers } from "@/components/layout/footer";
import { Mountain, Flame, Coffee, Car } from "lucide-react"; 

export default function Home() {
  // 1. Definição do Array (Fora do retorno do JSX)
  const blogCategories = [
    { 
      id: 'veiculos',
      color: 'purple', 
      icon: <Car size={20} />, 
      title: 'Veículos', 
      desc: 'o conteudo aq carai aq estaria o primeiro card (Código)' 
    },
    { 
      id: 'vida',
      color: 'blue', 
      icon: <Coffee size={20} />, 
      title: 'Vida', 
      desc: 'o conteudo aq carai aq estaria o segundo card (Daily)' 
    },
    { 
      id: 'besteiras',
      color: 'red', 
      icon: <Flame size={20} />, 
      title: 'Besteiras', 
      desc: 'o conteudo aq carai aq estaria o terceiro card (Hot Topics)' 
    }
  ];

  return (
    <>
      <Headers>
        <Link href="/blog">blog</Link>
        <Link href="/">sobre mim</Link>
      </Headers>

      <main className="flex flex-col items-center p-0 m-0 border-0 pb-20">
        <Hero 
          title="Oi, sou eu Markin"
          subtitle="Bem vindo ao meu canto de loucuras diarias" 
        />
        
        <Card 
          color="explanation" 
          height="h-auto" 
          width="w-[95%] max-w-5xl"
          header={<Mountain size={34} />} 
        >
          <p className="mb-8 max-w-2xl text-gray-200 text-xl">
            Olá! Aqui é onde eu solto minhas ideias, histórias e perrengues. Sou apaixonado por <span className="text-purple-500">veículos </span> 
            (principalmente os antigos que dão problema) e adoro compartilhar as loucuras do dia a dia.
          </p>
          <p className="mb-8 max-w-2xl text-gray-200 text-xl">Este blog é uma mistura de tudo: desde as aventuras com meu carro até reflexões aleatórias sobre a vida.</p>

          <div className="flex flex-col gap-6 w-full items-center">
            
            {/* 2. O Mapeamento (Substituindo a repetição manual) */}
            {blogCategories.map((item) => (
              <Card 
                key={item.id} 
                color={item.color} 
                height="min-h-[50px]" 
                width="w-full max-w-4xl" 
                header={item.icon}
              >
                <h3 className="text-white text-2xl">{item.title}</h3>
                <p>{item.desc}</p>
              </Card>
            ))}

            <Card color="explanation" height="min-h-[70px]" width="w-[95%] max-w-5xl">
              <h3>Por que esse blog?</h3>
              <p>Decidi criar esse espaço pra registrar minha jornada. Um dia, quando eu estiver velho 
            (e provavelmente ainda consertando algum carro antigo), 
            quero poder voltar aqui e rir das minhas próprias histórias.
            E se no caminho isso entreter ou inspirar alguém, melhor ainda!</p>
            </Card>

            <h2 className="text-gray-500 mt-6">"A vida é como dirigir um carro velho: às vezes dá problema, mas a viagem sempre vale a pena."</h2>
            <p className="text-gray-500">— Eu, provavelmente depois de pagar outro mecânico</p>
          </div>
        </Card>
      </main>
      <Footers>
        <span>Meu Blog. Feito com paixão por</span>
        <span>veículos</span>
        <span>e</span>
        <span>vida</span>.
      </Footers>
    </>
  );
}