import { Calendar, MessageCircle, Star } from "lucide-react";

type Props = {
  id: number;
  title: string;
  tag: string;
  preview: string;
  date: Date;
  rate: number;
  commentsCount: number;
  image: string;
};

export function Posts({
  title,
  tag,
  preview,
  date,
  rate,
  commentsCount,
  image,
}: Props) {
  return (
    <div className="flex flex-col overflow-hidden border rounded-2xl bg-[#1a1b3b]/50 border-slate-700/50 transition-all hover:border-purple-500/50 group w-full max-w-[380px]">
      
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      
      <div className="flex flex-col p-5 gap-4">
        
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 text-xs font-medium rounded-lg bg-purple-500/10 text-purple-400">
            {tag}
          </span>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <Calendar size={14} />
            <span>{date.toLocaleDateString('pt-BR')}</span>
          </div>
        </div>

        
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-xl leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-3">
            {preview}
          </p>
        </div>

        
        <div className="flex justify-between items-center mt-2 pt-4 border-t border-slate-700/30">
          <div className="flex items-center gap-1 text-purple-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-bold">{rate.toFixed(1)}</span>
            <span className="text-slate-500 text-xs">(24)</span>
          </div>
          
          <div className="flex items-center gap-1 text-slate-400">
            <MessageCircle size={16} />
            <span className="text-sm">{commentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}