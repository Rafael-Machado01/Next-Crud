import Title from "./input";
import Button from "./button";
export default function Form() {
   return (
   <nav className="m-2 p-2 grid grid-cols-2 md:grid-cols-4">
      <Title type="text" placeholder="Digite o nome do produto"/>
      <Title type="number" placeholder="Digite o preço do produto"/>
      <Title type="number" placeholder="Digite a quantidade de estoque"/>
      <Button/>
   </nav>
      
    )}