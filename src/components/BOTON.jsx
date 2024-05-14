function Boton ({operador,fn}) {

    return ( 
            <button  onClick={fn}  type="button" className="h-10 w-10 flex items-center justify-center text-2xl text-white font-bold bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500">{operador}
            </button>
     );
}
 
export default Boton;