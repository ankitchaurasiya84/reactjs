import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useState,useMemo, useEffect, useCallback } from "react"
import CustomTable from "../CommanComponent/CustomTable"


const Debouncing = () => {
  const data=[
    {
      "dessert": "Frozen yoghurt",
      "calories": 159,
      "fat": 6,
      "carbs": 24,
      "protein": 4
    },
    {
      "dessert": "Ice cream sandwich",
      "calories": 237,
      "fat": 9,
      "carbs": 37,
      "protein": 4.3
    },
    {
      "dessert": "Eclair",
      "calories": 262,
      "fat": 16,
      "carbs": 24,
      "protein": 6
    },
    {
      "dessert": "Cupcake",
      "calories": 305,
      "fat": 3.7,
      "carbs": 67,
      "protein": 4.3
    },
    {
      "dessert": "Gingerbread",
      "calories": 356,
      "fat": 16,
      "carbs": 49,
      "protein": 3.9
    }
  ]
  
  const columns = [
    { label: "Dessert ", key: "dessert" },
    { label: "Calories", key: "calories", align: "right" },
    { label: "Fat (g)", key: "fat", align: "right" },
    { label: "Carbs (g)", key: "carbs", align: "right" },
    { label: "Protein (g)", key: "protein", align: "right" }
  ];
const [a,setA]=useState("")
const [ds,setDs]=useState("")
 
useEffect(()=>{
  const handler=setTimeout(()=>{
setDs(a)
  },1000)
return ()=>clearTimeout(handler)

},[a])

// const filtered=useMemo(()=>{
//   return data.filter((item)=>item.dessert.toLowerCase().includes(ds.toLowerCase()))

// },[data,ds])
const filteredFunction=useCallback(()=>{
  return data.filter((item)=>item.dessert.toLowerCase().includes(ds.toLowerCase()))

},[data,ds])
const filtered=filteredFunction()



  const updateddata=filtered.map((i)=>({
    ...i,
    dessert: <Chip label={i.dessert}> </Chip>
    
  }


  )
      

  )
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value ={a} placeholder="Enter item to search" onChange={(e)=>setA(e.target.value)} />
      <CustomTable columns={columns} rows={updateddata} />
    </div>
  )
}

export default Debouncing



