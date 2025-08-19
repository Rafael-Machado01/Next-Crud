      import { database } from "@/app/api/lib/database";
      // Conexão com o banco.

      // Função quando houver um GET
export async function DELETE(request,{params}) {
   const {id} = params;
   try {
      await database.query("DELETE FROM PRODUCT WHERE id = ?",[id]);
     return new Response(JSON.stringify({message:"Produto Deletado"}), {
      status: 200,
       headers:{'Content-Type': "application/json"}});
      } 
   catch (err) {
      return new Response(JSON.stringify({error:err.message}), {
         status:500,
         headers:{'Content-Type': "application/json"}});
   }
}