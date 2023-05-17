import Image from "next/image"
import { use, useState } from "react"

export default function ImagemAleatoria() {
    const [pesquisa, alterarPesquisa] = useState<string>('abstact')
    const [tamanho, alterarTamanho] = useState<number>(300)
    const url = 'https://source.unsplash.com/featured/300x300?'

    function urlImagem() {
        return `${url}${pesquisa}`
    }

    function renderizarBotao(valor: string) {
        return (
            <button className={`
                bg-blue-500 px-5 py-3 rounded-md
            `} onClick={() => {
                alterarPesquisa(valor)
                console.log(valor)
            
            }}>
                {valor}
            </button>
        )
    }
    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <div className="flex justify-center gap-7 mb-5">
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <Image 
            src = {`${url}${tamanho}x{tamanho}?${pesquisa}`} 
            height={300} width={300} alt="Imagem" 
            className="rounded-md"/>
            <div className="flex gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
            <div>
                <input type="number" value={tamanho} 
                className='bg-red-500 p-2 rounder-md outline-none w-full'
                onChange={e => {
                    alterarTamanho(+e.target.value)
                }}
                />
            </div>
        </div>
    )
}