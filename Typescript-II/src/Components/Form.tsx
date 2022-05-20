import axios from "axios";
import { useState } from "react"
import style from "../Styles/Form.module.css"
const Form = () => {
  
    const [formData,setFormData]=useState({})
    const handleChange=(e:any)=>{
        let input=e.target.name;
        setFormData({...formData,
        [input]:e.target.value
        })
         }
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    console.log(formData)
    axios.post("http://localhost:8080/formData",formData)
  }
  return (
    <div className={style.form}>
        <h4>Fill your Laptop's details Here</h4>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Enter Id No.</label>
        <input type="id"  name="id" onChange={handleChange}/>
        <br />
        <label htmlFor="">Enter Model</label>
        <input type="text" name="model" onChange={handleChange}/>
        <br />
        <label htmlFor="">Enter Make Year</label>
        <input type="year" name="make_year" onChange={handleChange}/>
        <br />
        <label htmlFor="">Enter Operating System</label>
        <input type="text" name="op_system" onChange={handleChange}/>
        <br />
        <label htmlFor="">Enter Screen Height</label>
        <input type="height" name="height" onChange={handleChange}/>
        <br />
        <label htmlFor="">Enter Screen WIdth</label>
        <input type="width" name="width" onChange={handleChange}/>
        <br />
        <label htmlFor="">Enter Price in Rs.</label>
        <input type="price" name="price" onChange={handleChange}/>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form