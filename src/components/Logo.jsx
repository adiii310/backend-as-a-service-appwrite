import React from 'react'

const Logo = ({width = "100px"}) => {
  return (
    <div className={`${"w-"+width} `}>
        <img className={` w-full object-contain `} src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png' />
    </div>
  )
}

export default Logo