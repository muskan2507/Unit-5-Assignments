import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import style from "../Styles/Form.module.css"
type formdata ={
  id:number,
  price:number;
  height:number;
  width:number;
  make_year:number;
  model:string;
  op_system:string;
}
const Display = () => {
  const [data,setData]=useState<formdata[]>([])
  const get =()=>{
    axios.get("http://localhost:8080/formData").then((res:AxiosResponse<formdata[]>)=>{
     const  {data}=res
    //  console.log(data)
     setData(data)
    })
  }
  useEffect(()=>{
    get()
    console.log(data)
  },[])
  return (
    <div>
      <h3>See Details Here</h3>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Sl. No.</td>
            <td>Id</td>
            <td>Model</td>
            <td>Make year</td>
            <td>Operating System</td>
            <td>Screen weigth</td>
            <td>Screen Width</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>{
              return (
                <tr key={i}>
                  <th>{i+1}.</th>
                  <th>{e.id}</th>
                  <th>{e.model}</th>
                  <th>{e.make_year}</th>
                  <th>{e.op_system}</th>
                  <th>{e.height}</th>
                  <th>{e.width}</th>
                  <th>{e.price}</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Display