import React from 'react'

function Button({title, type}) {
  return (
    <button type={type} className='button w-[132px] py-[12px] text-center block rounded-[100px] text-white mx-auto'>{title}</button>
  )
}

export default Button