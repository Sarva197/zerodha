import React from 'react'

function Description(props) {
  return (
    <div className='mb-5 col-10'>
        <h3 style={{color: "#424242"}}>{props.heading}</h3>
        <p className='text-muted'>{props.desc}</p>
    </div>
  )
}

export default Description