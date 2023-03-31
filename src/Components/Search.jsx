import React, {useState} from 'react';
import data from "../drug1.json"
//console.log(data.fields)
export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
        <input type="text" placeholder="Search Here" onChange={(event) => {
    setSearchTerm(event.target.value);
   console.log(event.target.value)
  
  }} />
 

{
    data.fields.filter((item) => {
        if(searchTerm === "") {
            return item;
        } else if(item.key.toLowerCase().includes(searchTerm.toLowerCase()) || item.label.toLowerCase().includes(searchTerm.toLowerCase()) || item.type.toLowerCase().includes(searchTerm.toLowerCase()) ) {
            return item
        }
      
    }).map((val,k)=> {
        return (
            <div>
                <p>{val.key}</p>
            </div>
        )
    })
}

    </div>
  )
}
