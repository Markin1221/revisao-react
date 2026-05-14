import { title } from "process";

type props ={
    title: string;
    subtitle:string;
};

export function Hero({title, subtitle}:props){
    return(
        <div className="flex justify-center items-center m-25 flex-col">
            <h1 className="text-[62px] font-bold bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {title}
            </h1>
            <p className="text-xl text-muted-foreground">
                {subtitle}</p>
        </div>
    );
}