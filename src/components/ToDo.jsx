import { useState } from "react";
import ClearList from "./ClearList";

 

const ToDo = () => {
    const [list,setList]=useState([])
    const [item,setItem]=useState('')
    console.log(item);

    const addItem=()=>{
        list.push(item)
        
        setList([...list])
        setItem('')
        
        
        
     
    }
const removeItem= (index)=>{
     
  list.splice(index,1)
 
    setList([ ...list])
     
}
const handleClear= ()=>{
  let confirmation= window.confirm('Do you want Delete all list item ? ')
  if(confirmation) setList('');
}
    return (
       
            <div className=" h-auto  bg-slate-400 ">
                <h5 className="font-bold text-lg  my-3 px-2 py-2 text-slate-700 uppercase tracking-wider">Total Item 🛒<span className="bg-white rounded-full">{list.length} </span></h5>
                <div className=" flex items-center">
                     <div className=" flex items-center border rounded-md  mx-auto w-90  ">
                        <div className="  ">
                             <input 
                        className=" px-4 py-2 text-sm text-black placeholder-gray-900 bg-slate-50 focus:outline-none "
       
                        onChange={(e)=>setItem(e.target.value)} type='text' placeholder=" Enter your item  " />
                        </div>
                     <div className="div">
                          <button  
            className="px-4 py-2 my-6 text-sm text-black border bg-cyan-500 hover:bg-cyan-600 rounded-md focus:outline-none"
            onClick={addItem}>Add Item</button>
                        </div> 
               
                </div>
                </div>
               
              <div className="  flex items-center ">
                <table className=" min-w-full     bg-slate-200">
      <thead className="bg-slate-700">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-slate-200 uppercase tracking-wider">item</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-slate-200 uppercase tracking-wider">Remove</th>
         
        </tr>
      </thead>
      <tbody>
        
               {         
                list.length !==0? (
                    list.map((eachItem,index)=>{
                        return(
                            <tr>
                                
                               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{eachItem}</td>
                                <td> <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-blue-600" onClick={()=>removeItem(index)}>Remove</button> </td>
                            </tr>
                        )
                    })
                ):( <tr></tr>)   
           }     
         
        
       
      </tbody>
    </table>
                 

          
          
         
              </div>
              <br />
              <div className="container"> 
              <br />
                <ClearList onClearList= {handleClear}/>
              </div>
          
            </div>
           
       
    );
};

export default ToDo;


 