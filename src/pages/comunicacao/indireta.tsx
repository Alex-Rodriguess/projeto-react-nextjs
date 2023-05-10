import Contador from "@/src/components/comunicacao/indireta/Contador"

export default function PaginaIndireta() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl text-white font-black mb-10">Comunicação Indireta</h1>
            <div className="gap-5 text-white">
            <Contador />
            <Contador />
            
            </div>
            
        </div>
    )
}