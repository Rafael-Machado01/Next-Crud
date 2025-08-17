'use client' // Para usar os Hooks

import {useState,useEffect} from "react";


import Welcome from "@/app/ui/components/welcome";
import Form from "@/app/ui/components/form/form";
import Table from "@/app/ui/components/table/table";
import React from "react";


export default function Home() {
  const [products,setProducts] = useState([]) // Aqui armazenamos os produtos do Database

  const [loading, setLoading] = useState(true); // Vamos usar isso para indicar o carregamento

  const [error, setError] = useState(null) // Para erros.

  useEffect(() => {
     // Função para pegar 
    async function fetchProdutos() {
      try {
        const res = await fetch("/api/products") // Rota 
        if(!res.ok) throw new Error(`Erro na requisição: ${res.status}`);
        const data = await res.json(); // Transformando a resposta em JSON
        setProducts(data) // Salvando no State  
      } catch (err){
        setError(err.message); // Salva o erro no state para podermos renderizar.
      } finally {
        setLoading(false) // Quando a pagina carrega ele está true, no mesmo tempo que a pagina está carregando e acaba ela fica false.

      }
    }
    fetchProdutos();
  },[]) // Array vazio para executar quando renderizar.

  if(loading) return <p className="text-white text-lg text-center mt-50">Carregando Produtos...</p>
  if(error) return <p className="text-white text-lg text-center mt-50">Ocorreu o erro: {error}</p>



  return (
    <main className="bg-blue-50 m-5 rounded-br-4xl p-2">
      <Welcome/>
      <Form/>
      <Table products={products}/>
    </main>
  );
}
