

import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-6">
    
      <div className="flex items-center gap-3 mb-4">
         <span className="text-4xl">
          🪻
        </span>

        <h1 className="text-3xl font-bold text-gray-800">
          Primeiro Componente
        </h1>

        <span className="text-4xl">
          🪻
        </span>
      </div>

      <button className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-200">
        Clique aqui
      </button>

    </div>
  );
}







