import React, { useState } from "react";
import './Form.css';
import Axios from "axios";

function Formdata() {
  const url = "http://www.example.com/";
  const [data, setdata] = useState({
    email: "",
    age: "",
    gender: "",
  });

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      email: data.email,
      age: data.age,
      gender: data.gender
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  }
  return (
    <>
      <h3 className="modal__title">
        <form className="form" onSubmit={(e)=>submit(e)}>
          <div className="control mb-3">
            <label>What is your emial?</label>
            <input
              onChange={(e) => handle(e)}
              id="email"
              value={data.email}
              placeholder="email"
              type="email"
            ></input>
          </div>
          <div className="mb-3 control">
            <label>How old are you?</label>
            <input
              onChange={(e) => handle(e)}
              id="age"
              value={data.age}
              placeholder="Age"
              type="text"
            ></input>
          </div>
          <div className="mb-3 control">
            <label>What is your gender?</label>
            <input
              onChange={(e) => handle(e)}
              id="gender"
              value={data.gender}
              placeholder="Gender"
              type="text"
            ></input>
          </div>
          <button type="submit" className="actions">
            Submit
          </button>
        </form>
      </h3>
    </>
  );
}

export default Formdata;
