import React from 'react';
import axios from 'axios';

const Todos = () => {
    const [text,setText] = React.useState("");
    const [data,setData] = React.useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const payload = {
            title: text,
            status: false
        }
        axios.post("http://localhost:8080/",payload).then(setData([...data,payload]));
        setText("")
    }
    const handleDelete = (id)=>{
      axios.delete(`http://localhost:8080/${id}`)
      let filterData = data.filter((e)=>id!==e.id);
      setData([...filterData])
    }
    const handleToggle = (id)=>{
      data.map((e)=>e.id===id?e.status=!e.status:e);
      setData([...data])
    }
    const get = ()=>{
      axios.get("http://localhost:8080/todos").then(({data})=>setData(data))
    }

    React.useEffect(()=>{
      get()
    },[])
  return (
    <div className='new-todo'>
      <h3>Todos</h3>
      <form onSubmit={handleSubmit}>
          <input className="input-todo" value={text} onChange={(e)=>setText(e.target.value)} type="text" />
          <input className="add-todo" type="submit" value="Add" />
      </form>
      <div className="todo-list">
        {data.map((e)=>{
          return <div className='items' key={e.id}>
          <input className="toggle-btn" type="checkbox" onClick={()=>handleToggle(e.id)} />
            <h4 style={{color:`${e.status?"green":"black"}`}}  className="heading">{e.title}-{e.status?"Done":"Not Done"}</h4>
            <button className='delete-todo' onClick={()=>handleDelete(e.id)}>Delete</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Todos