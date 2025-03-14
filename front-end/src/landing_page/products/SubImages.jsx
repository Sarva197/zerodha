import React from 'react'

function SubImages({imgUrl , desc}) {
  return (
    <>
    <img src={imgUrl} alt="" />
    <p>{desc}</p>
    </>
  )
}

export default SubImages