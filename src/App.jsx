import Formulario from "./components/Formulario"
import { useState, useEffect } from "react"
import Noticia from "./components/Noticia"
function App() {
  const [topic, setTopic] = useState('general')
  const [idioma, setIdioma] = useState('it')
  const [noticias,setNoticias] = useState([])

  //Per teni algo cagat, busquem entre les noticies més oimportants de USA

  const api1 =`https://newsapi.org/v2/everything?q=bitcoin&apiKey=00a9a6d202e641668347839c5abb3b43`
  const api2=`https://newsapi.org/v2/top-headlines?country=${idioma}&category=${topic}&apiKey=00a9a6d202e641668347839c5abb3b43`
  useEffect(()=>{
    const llamarApi1 = async()=>{
      const respuesta = await fetch(api1)
      const resultado = await respuesta.json()
      setNoticias(resultado.articles.slice(0,10))
    }
    llamarApi1()
    


  },[])
  useEffect(()=>{
    const llamarApi2 = async()=>{
      const respuesta = await fetch(api2)
      const resultado = await respuesta.json()
      setNoticias(resultado.articles)
      console.log('Llamando a la api2...')
    }
    llamarApi2()
    


  },[topic,idioma])
  


  return (
    <>
      <h1 className="text-4xl text-center mt-11">Buscador de Notícias</h1>
      <div className="w-screen flex items-center justify-center">
       <Formulario 
         idioma = {idioma}
         setIdioma = {setIdioma}
         topic = {topic}
         setTopic = {setTopic}
       
       />
      
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 m-4 md:grid-cols-3 sm:grid-cols-2">
        {
          noticias.map(noticia=>(
            <Noticia 
             key={noticias.indexOf(noticia)}
             noticia={noticia}
            
            />
           ))

         }
     
      </div>
    
        
      
   
    </>
  )
}

export default App
