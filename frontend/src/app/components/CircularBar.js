import React from 'react'

const CircularBar = ( {size, innerColor, outerColor, gapColor}) => {
  return (
    <div className={`h-[${size}] w-[${size}] rounded-full relative `}>
        <div className={`h-[50%] w-full bg-[${gapColor}] rounded-t-full`}>
            <div className={`h-full w-[50%] bg-[${innerColor}] rounded-tl-full `}></div>
        </div>
        <div className={`h-[50%] w-full bg-[${innerColor}] rounded-b-full `}>
            <div className={`h-full w-[50%] bg-[${innerColor}] rounded-bl-full `}></div>
        </div>
        <div className={`h-[70%] w-[70%] rounded-full m-auto bg-[${outerColor}] absolute top-[15%] left-[15%]`}>
        </div>
    </div>
  )
}

export default CircularBar