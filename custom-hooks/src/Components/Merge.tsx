import React from 'react'
import UseMergeState from '../Hooks/UseMergeState'
import style from "../Styles/Form.module.css"
const Merge = () => {
    const [data,setdata]=UseMergeState({})
    const handleChange =(e:any)=> {
        let input = e.targte.name;
        setdata({...data,
        [input]:e.targte.value
    })

    }
  return (
    <div>
        <form action="" className={style.form}>
            <label htmlFor="">Username</label>
            <br />
            <input type="text"  name="username"/>
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" name="email" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" name="password" />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Merge