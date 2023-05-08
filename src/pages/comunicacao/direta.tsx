import Avo from "@/src/components/comunicacao/direta/Avo"

export default function PaginaDireta() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl text-white font-black mb-10">Comunicação Direta</h1>
            <Avo nome="Mario" sobrenome="Silva"  />
        </div>
    )
}