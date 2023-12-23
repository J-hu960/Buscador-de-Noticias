export default function Formulario({idioma,setIdioma,topic,setTopic}){
  
    return(
        <>
          <form className="w-3/4 h-3/4 flex items-center justify-around" action="">
               <div className="flex flex-col w-3/4 gap-y-2">
                <label className="text-xl font-bold" htmlFor="topic">Seleccione un topico</label>
                <select 
                   value={topic}
                   onChange={e => setTopic(e.target.value)}
                
                   className="border-2 w-3/4  border-black rounded p-2 text-center" name="topic" id="topic">
                    <option value="general">General</option>
                    <option value="business">Negocios</option>
                    <option value="entertainment">Entretenimiento</option>
                    <option value="health">Salud</option>
                    <option value="science">Ciencia</option>
                    <option value="sports">Deporte</option>
                    <option value="technology">Tecnologia</option>
               

                </select>
                </div>
                <div className="flex flex-col w-1/4 gap-y-2">
                 <label htmlFor="topic">Seleccione un Pais</label>
                 <select 
                  value={idioma}
                  onChange={e => setIdioma(e.target.value)}
                 className="border-2  border-black rounded p-2 text-center" name="topic" id="topic">
                  
                    <option value="ru">Rusia</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                    <option value="ve">Venezuela</option>
                    <option value="ca">Canadá</option>
                    <option value="cu">Cuba</option>

                    


                  </select>
         
               </div>
                
           </form>
        </>
    )
}