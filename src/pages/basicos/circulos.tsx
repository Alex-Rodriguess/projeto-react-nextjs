import Circulo from "@/src/components/Circulo"
export default function PaginaCirculos() {
    return (
      <div className={`
          flex justify-around bg-red-500 
      `}>
        <Circulo texto="Circ #1" />
        <Circulo texto="Circ #2" />
        <Circulo texto="Circ #3" quasePerfeito/>
        <Circulo texto="Circ #4"/>
      </div>
    )
}