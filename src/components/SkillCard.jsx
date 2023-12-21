import React from 'react'

export default function SkillCard(prop) {
  return (
    <div className='flex flex-col justify-center items-center p-2'>
        <img className='max-w-[100px]' src={prop.img} alt='skill'/>
        <h2 className='font-bold text-md text-center'>{prop.header}</h2>
        <p className='text-center'>{prop.detail}</p>
    </div>
  )
}
