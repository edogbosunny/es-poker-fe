/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './css/vote.css'
import Card from '../molecules/card';

const Vote = (props) => {
  const [value, setValue] = React.useState('')
  const [vote, setVote] = React.useState('')
  const [data, setData] = React.useState([])
  const [dropDown, setDropDown] = React.useState('0')

  if (!props?.location?.state?.room) {
    window.alert('please enter a valid meeting link')
    props.history.push('/vote')
  }

  const pointValue = {
    0: 0,
    0.5: 1,
    1: 2,
    2: 3,
    3: 4,
    5: 5,
    8: 6,
    13: 7
  }

  let io = window.$games
  async function handleClick() {
    io.emit('vote', {
      room: props?.location?.state?.room,
      name: value,
      vote: Number(vote),
      point: pointValue[vote]
    })
  }

  io.on('success', (res) => console.log('success', res))

  io.on('vote-status', (res) => {
    setData(res.response.meta.data)
    console.log('vote-success ==-->', res.response.meta.data)
  })

  let handleDropdownChange = (e) => {
    setVote(Number(e.target.value))
    setDropDown(e.target.value)
  }

  return (
    <div className='vote'>
      Please see votes below in real time
      <input
        className='inp'
        type="text"
        value={value}
        placeholder={'Voters name'}
        onChange={(e) => {
          console.log('change-', e)
          setValue(e.target.value)
        }}
      />
      <div>
        <select id="dropdown" onChange={handleDropdownChange}>
          <option value={dropDown}>{dropDown}</option>
          <option value="0">0</option>
          <option value='0.5'>2</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="13">13</option>
        </select>

      </div>

      <div className='btn'>
        <button

          onClick={handleClick}>
          Vote.
        </button>
        <div className='card-div'>
          <Card item={data} />
        </div>

      </div>
    </div>

  );
}

export default withRouter(Vote);