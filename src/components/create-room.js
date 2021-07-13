/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
// import { useLocation } from 'react-router';
// import queryString from 'query-string';
// import { useHistory, Link } from "react-router-dom";

import axios from 'axios';
import './css/create-room.css';


const createRoom = async (url, data) => {
  try {
    return await axios.post(url, data)
    // console.log(a)
  } catch (e) {
    // console.log('???', e.response.data.msg)
    window.alert(e.response.data.msg);
  }
}

const Landing = () => {
  // const history = useHistory();

  const [value, setValue] = useState('')
  const [defaultVal, setDefaultVal] = useState({
    message: "",
    url: "",
  })


  async function handleClick() {

    let resp = await createRoom(`${process.env.REACT_APP_BASE_URL}home`, {
    // let resp = await createRoom('http://localhost:3001/api/v1/home', {
      "room": value,
      "room_id": String(Date.now() + Math.random()),
      "meta": {}
    })
    if (resp) {
      let splitUrl = resp.data?.data.url.split('?')
      let newUrl = `/join?${splitUrl[1]}`
      let returnUrl = window.location.protocol + "//" + window.location.host + newUrl

      setDefaultVal({
        message: resp.data.data.message,
        url: returnUrl
      })
    }
  }

  return (
    <div className='body'>
      <div className='sub-bg'>
      <div>Please enter the room name below.</div>
        <input
          className='inp'
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </div>
      <div className='btn'>
        <button
        
          onClick={handleClick}>
          Create room.
        </button>
      </div>
      <div className='text-repsponse'>
        <div>{defaultVal.message}</div>
        <a href={defaultVal.url}>{defaultVal.url}</a>
      </div>
    </div>

  );
}


export default Landing;
