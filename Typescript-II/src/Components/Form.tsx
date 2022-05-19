import { useState } from "react"
import style from "../Styles/Form.module.css"
const Form = () => {
    const [formData,setFormData]=useState({})
    const handleChange=(e)=>{
        let input=e.target.name;
         
    }
  return (
    <div className={style.form}>
        <h4>Fill your Laptop's details Here</h4>
        <label htmlFor="">Enter Id No.</label>
        <input type="id" />
        <br />
        <label htmlFor="">Enter Model</label>
        <input type="text" />
        <br />
        <label htmlFor="">Enter Make Year</label>
        <input type="year" />
        <br />
        <label htmlFor="">Enter Operating System</label>
        <input type="text" />
        <br />
        <label htmlFor="">Enter Screen Height</label>
        <input type="height" />
        <br />
        <label htmlFor="">Enter Screen WIdth</label>
        <input type="width" />
        <br />
        <label htmlFor="">Enter Price in Rs.</label>
        <input type="price" />
        <br />
        <input type="submit" />
    </div>
  )
}

export default Form