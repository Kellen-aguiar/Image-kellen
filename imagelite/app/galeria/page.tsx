'use client'; 

import { Template, ImageCard } from '../components'; 
import { Image } from '../resource/Image'; 
import { ImageService, useImageService } from '../resource/Service'; 
import { useState } from 'react'; 
 
export default function Galeria() { 
 
  const useService = useImageService(); 
  const [images, setImage] = useState<Image[]>([]);  
  const [query, setQuery] = useState<string>(''); 
  const [extension, setExtension] = useState<string>(''); 
 
  async function searchImages() { 
    const result = await useService.buscar(query, extension); 
    setImage(result); 
    console.log(query, extension); 
  } 
 
  /* renderizando a imagem na tela */ 
  function renderImageCard(image: Image) { 
    return ( 
      <ImageCard 
        key={image.url} 
        imageName={image.name} 
        imageUrl={image.url} 
        imageSize={image.size} 
        uploadDate={image.uploadDate} 
        extension={image.extension} 
      /> 
    ); 
  } 
 
  function renderImageCards() { 
    //return images.map((image) => renderImageCard(image)); 
    return images.map(renderImageCard); 
  } 
 
  return ( 
    <Template>

  
      <div className="fixed inset-0 bg-indigo-50 -z-20"></div>
      <div className="fixed top-10 left-10 w-8 h-8 bg-purple-300 rounded-full opacity-70 -z-10"></div>
      <div className="fixed top-24 right-20 w-5 h-5 bg-purple-500 rounded-full opacity-60 -z-10"></div>     
      <div className="fixed top-1/2 left-10 w-12 h-12 bg-purple-200 rounded-full opacity-70 -z-10"></div>     
      <div className="fixed bottom-20 right-10 w-10 h-10 bg-purple-400 rounded-full opacity-60 -z-10"></div>      
      <div className="fixed bottom-10 left-1/4 w-6 h-6 bg-purple-500 rounded-full opacity-50 -z-10"></div>     
      <div className="fixed top-1/3 right-1/4 w-7 h-7 bg-purple-300 rounded-full opacity-60 -z-10"></div>      
      <div className="fixed bottom-1/3 left-1/3 w-4 h-4 bg-purple-600 rounded-full opacity-50 -z-10"></div>      
      <div className="fixed top-16 left-1/3 w-4 h-4 bg-purple-400 rounded-full opacity-50 -z-10"></div>      
      <div className="fixed top-40 left-20 w-6 h-6 bg-purple-500 rounded-full opacity-40 -z-10"></div>     
      <div className="fixed top-12 right-1/3 w-10 h-10 bg-purple-200 rounded-full opacity-60 -z-10"></div>     
      <div className="fixed top-2/3 right-20 w-5 h-5 bg-purple-600 rounded-full opacity-50 -z-10"></div>    
      <div className="fixed bottom-24 left-16 w-9 h-9 bg-purple-300 rounded-full opacity-60 -z-10"></div>   
      <div className="fixed bottom-10 right-1/3 w-7 h-7 bg-purple-500 rounded-full opacity-40 -z-10"></div> 
      <div className="fixed top-1/4 right-10 w-3 h-3 bg-purple-600 rounded-full opacity-60 -z-10"></div>
      <div className="fixed top-3/4 left-10 w-5 h-5 bg-purple-400 rounded-full opacity-50 -z-10"></div>
      <div className="fixed top-1/2 right-1/3 w-8 h-8 bg-purple-300 rounded-full opacity-50 -z-10"></div>
      <div className="fixed bottom-1/4 right-1/2 w-4 h-4 bg-purple-600 rounded-full opacity-40 -z-10"></div>
      <div className="fixed top-20 left-1/2 w-3 h-3 bg-purple-500 rounded-full opacity-60 -z-10"></div>
      <div className="fixed bottom-32 right-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-50 -z-10"></div>


      <div className="relative z-10">

        <section className="flex flex-col items-center justify-center my-5"> 
           
          <div className="flex space-x-4"> 
             
            <input 
              type="text"  
              onChange={(event) => setQuery(event.target.value)} 
              className="border px-4 py-2 rounded-lg text-white-900" 
              placeholder="Buscar imagens..." 
            /> 

            <select 
              onChange={event => setExtension(event.target.value)} 
              className="border px-4 py-2 rounded-lg text-white-900"
            > 
              <option value="">All formats</option> 
              <option value="PNG">PNG</option> 
              <option value="JPG">JPG</option> 
              <option value="GIF">GIF</option> 
              <option value="JPEG">JPEG</option> 
            </select> 

            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" 
              onClick={searchImages}
            > 
              Search 
            </button> 

            <button 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            > 
              Add New 
            </button> 

          </div> 
               
        </section> 
 
        <section className="grid grid-cols-4 gap-4 p-4"> 
          {renderImageCards()} 
        </section> 

      </div>

    </Template> 
  ); 
}