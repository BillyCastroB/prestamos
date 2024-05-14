import Header from "./components/HEADER"
import { useState, useEffect } from "react"
import Boton from "./components/BOTON"
import { calcularPagar } from "../helpers/funciones";


function App() {

  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  useEffect(()=>{
    const resultadoPagar = calcularPagar(cantidad, meses);
    setTotal(resultadoPagar);
    setPago(total/meses);
  }, [cantidad,meses,total])

  function handleChange(e){
      setCantidad(parseInt(e.target.value));
  }

  function handleClickAumento(){
    const valor = cantidad + STEP;
    if(valor>MAX){
      alert("cantidad no valida");
      return;
    }
    setCantidad(valor);
  }
  function handleClickDecremento(){
      const valor = cantidad - STEP;
      if(valor<MIN){
        alert("cantidad no valida");
        return;
      }
      setCantidad(valor);
  }
  return(
     <div className="my-10 m-w-lg mx-auto bg-white shadow p-10">
      <Header/>

        <div className="flex justify-between my-6  ">
          
          <Boton 
            operador = "-"
            fn={handleClickDecremento}
          />

          <Boton 
            operador = "+"
            fn={handleClickAumento}
          />
        </div>

      <input className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600' 
      type="range"
      min={MIN}
      max={MAX}
      step={STEP}
      value={cantidad}
      onChange={handleChange}
      />
      <p className="text-indigo-700 text-center text-5xl font-extrabold mb-4">
        S/.{cantidad}.00
      </p>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">elige un <span className="text-indigo-600">plazo </span> a pagar</h2>
      <select value={meses} className="mt-2 p-2 w-full bg-white rounded-lg border-gray-600 text-center text-xl font-extrabold" onChange={e=>{setMeses(+e.target.value)}} name="" id="">
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="p-5 bg-gray-100 space-y-3">
      <h2 className="text-2xl font-extrabold text-gray-500 text-center"><span className="text-indigo-600">Resumen </span> de pagos</h2>
      </div>
        <p className="text-center font-bold text-gray-700 text-xl">{meses} Meses</p>
        <p className="text-center font-bold text-gray-700 text-xl">Total a pagar: S/.{calcularPagar(cantidad, meses)} </p>
        <p className="text-center font-bold text-gray-700 text-xl">Pago mensual de: {parseInt(pago)} </p>
     </div>
  )
  
}

export default App
