"use client";

import { useRouter } from "next/navigation";
import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-6 overflow-hidden">

      <div className="absolute top-10 left-10 w-8 h-8 bg-purple-300 rounded-full opacity-70"></div>
      <div className="absolute top-24 right-20 w-5 h-5 bg-purple-500 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-200 rounded-full opacity-70"></div>
      <div className="absolute bottom-20 right-10 w-10 h-10 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-10 left-1/4 w-6 h-6 bg-purple-500 rounded-full opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-7 h-7 bg-purple-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-600 rounded-full opacity-50"></div>
      <div className="absolute top-16 left-1/3 w-4 h-4 bg-purple-400 rounded-full opacity-50"></div>
      <div className="absolute top-40 left-20 w-6 h-6 bg-purple-500 rounded-full opacity-40"></div>
      <div className="absolute top-12 right-1/3 w-10 h-10 bg-purple-200 rounded-full opacity-60"></div>
      <div className="absolute top-2/3 right-20 w-5 h-5 bg-purple-600 rounded-full opacity-50"></div>
      <div className="absolute bottom-24 left-16 w-9 h-9 bg-purple-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-10 right-1/3 w-7 h-7 bg-purple-500 rounded-full opacity-40"></div>
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-purple-600 rounded-full opacity-60"></div>
      <div className="absolute top-3/4 left-10 w-5 h-5 bg-purple-400 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-purple-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-purple-600 rounded-full opacity-40"></div>
      <div className="absolute top-20 left-1/2 w-3 h-3 bg-purple-500 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-50"></div>

      <img
        src="/bibble.jpg"
        alt="Foto de perfil"
        className="relative z-10 w-45 h-45 rounded-full object-cover border-4 border-white shadow-lg mb-5"
      />

      <div className="relative z-10 flex items-center gap-3 mb-4">
        <span className="text-4xl">🪻</span>

        <h1 className="text-3xl font-bold text-gray-800">
          Bem Vindo!
        </h1>

        <span className="text-4xl">🪻</span>
      </div>

      <button
        onClick={() => router.push("/galeria")}
        className="relative z-10 px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-200"
      >
        Acessar Galeria
      </button>

    </div>
  );
}
