export default function Noticia({noticia}){
    return(
       
        <a  href={noticia.url}> 
        <div className="border-2 p-2 rounded h-full  hover:bg-indigo-200 bg-indigo-400">
        <h1 className="text-xl">{noticia.title}</h1>
        <p>{noticia.description}</p>
        <footer className="flex flex-col ">
         <h6>{noticia.author}</h6>

        </footer>
       
          
       </div></a>
      
      
    )
}