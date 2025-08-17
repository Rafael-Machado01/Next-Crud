import { CiCircleMinus,  CiEdit } from "react-icons/ci";
export default function Row(props) {
   return (
      <div className="grid grid-cols-2 md:grid-cols-4 m-2 p-4 hover:shadow-2xl duration-1000 rounded-tr-sm gap-2">
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.storage}</p>
      <div className="flex gap-2">
      <CiCircleMinus size={25} className="hover:cursor-pointer hover:text-red-600 duration-400 "/>
            <CiEdit size={25} className="hover:cursor-pointer hover:text-blue-700 duration-500"/>
      </div>
      
      </div>
      
   )
}