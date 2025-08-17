import Row from "./row"
import Title from "./title"
export default function Table() {
   return (
      <div className="shadow m-6 p-2 rounded-l-xl">
         <Title/>
         
            <Row name="A" price="a" storage="1"/>
            <Row name="A" price="a" storage="1"/>
      </div>
   )
}