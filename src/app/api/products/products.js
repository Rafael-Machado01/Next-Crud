      import { database } from "../lib/database";
      // Conexão com o banco.

      // Função quando houver um GET
      export async function GET() {
      try {
         // Faz uma query no banco de dados para pegar todas as linhas da nossa tabela PRODUCTS
         const [rows] = await database.query("SELECT * FROM PRODUCTS");

         // Retorna o conteúdo da query em JSON e retornando um status 200 dizendo que deu certo.
         return new Response(JSON.stringify(rows), {
            status:200,
            headers: {'Content-Type': "application/json"}
         });
   } 
      // Caso de algum erro retorne a mensagem e o status.
      catch (err){
         return new Response(JSON.stringify({error:err.message}), { 
               status: 500,
               headers:{'Content-Type': "application/json"}
         })
      }
   }