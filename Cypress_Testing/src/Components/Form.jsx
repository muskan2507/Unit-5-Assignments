import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({});
    const [data, setData] = useState([]);
    const [error,setError] = useState(false);
    const handleChange = (e) => {
      const inputName = e.target.name;
      setForm({
        ...form,
        [inputName]: e.target.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      post(form);
    };
    const get = () => {
      axios.get("http://localhost:8080/form").then(({ data }) => setData(data));
    };
    const post = (payload) => {
      axios
        .post("http://localhost:8080/form", payload)
        .then(({ data }) => {
          setError(false);
          setData([...data, data])})
        .catch((err)=>setError(true))
    };
    useEffect(() => {
      get();
    }, []);
  return (
    <div>
          <form className="form" onSubmit={handleSubmit}>
        <label>Name: </label>{" "}
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Enter your name"
          className="input-name"
        />
        <label>Age: </label>{" "}
        <input
          onChange={handleChange}
          name="age"
          type="number"
          placeholder="Enter your age"
          className="input-age"
        />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
      <div className="error">{error && <h2 style={{color:"red"}}>Something went wrong</h2>}</div>
      <div className="items">
        {data.map((e, i) => {
          return (
            <div key={i}>
              <h3>
                {e.name}-{e.age}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Form