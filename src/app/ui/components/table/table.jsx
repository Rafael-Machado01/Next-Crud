import Row from "./row"
import Title from "./title"
export default function Table({products}) {
   return (
      <div className="shadow m-6 p-2 rounded-l-xl">
         <Title/>
            {products.map((item) => {
               return (
                  <Row key={item.ID} name={item.NAME} price={item.PRICE} storage={item.STORAGE}/>
               )})}
      </div>
   )
}