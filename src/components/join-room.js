/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import './css/join-room.css';

const JoinRoom = (props) => {
  let params = queryString.parse(props.location.search)

  const joinroom = async (url, data) => {
    try {
       let a = await axios.get(url)
       return a
    } catch (e) {
      window.alert(e.message);
    }
  }

  useEffect(() => {
    const apiCall = async () => {
      let response = await joinroom(`${process.env.REACT_APP_API_URL}join?room=${params.room}&room_id=${params.room_id}`)
      if (response) {
        window.alert(response.data.data.message);
        props.history.push('/vote', {
          room: params.room
        })
      }
    }
    apiCall()
  }, [])
  return (
    <div className='body'>
      <div className='alg-page'>
        <div>
          Join room page.
        </div>
        <div>Attempting to join</div>
      </div>
    </div>

  )

}

export default withRouter(JoinRoom);