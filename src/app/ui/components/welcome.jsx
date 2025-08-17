let User = 'Rafa'; // Precisamos deixar isso variável algo como uma pagina de autenticação de usuários
const Good = () => {
   let h = new Date().getHours(); // Pegando a hora.
   if(h <= 5) return 'Boa madrugada';
   if(h < 12) return 'Bom dia';
   if(h < 18) return 'Boa tarde';
   return 'Boa noite'
   // Return condicionais sobre a hora
}
export default function Welcome() {
   return (
      <>
      <h1 className="text-lg  m-6 bold">{Good()} <span className="primary-color">{User}</span> ! </h1>
      </>
   )
}