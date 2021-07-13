import React from 'react'
import '../components/css/vote.css'

const Card = ({item}) => {
  return item.map(data => {
   return (
     <div>
       <div className='vote'>
         <div className='card'>
           <div className='card-content'>
             <div>voter: {data?.name || 'N/A'}</div>
             <div>point: {data?.point || 'N/A'}</div>
             <div>vote: {data?.vote || 'N/A'}</div>
           </div>
         </div>
       </div>
     </div>
   )
 }) 
}

export default Card
