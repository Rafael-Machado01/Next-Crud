import mysql from 'mysql2/promise';   

// Fazendo a conexão com o banco de dados passando todas as credenciais

export const database = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "juju",
   database: "crud"
});
// Testando se a conexão deu certo

database.getConnection((err,connection)=> {
   if(err) {
      console.error("Erro ao conectar ao banco de dados :", err) // Caso houver erro retorne este erro
   } else {
      console.log("Conexão bem sucedida!")
      connection.release() // Devolvendo para Pool.
      // Poll seria algo como "Ponte" ele pega emprestado e devolve é bom para otimização 
      // Pois usamos e devolvemos essa Poll qnd realmente precisamos do Banco de Dados.
   }
})