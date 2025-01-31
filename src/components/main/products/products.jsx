import React from 'react'

export const Products = ({data, deleteList}) => {
  return (
    <div className='flex flex-col  gap-2 '>
        {
            data.map((value)=>{
                return(
                    <div className='grid rounded-xl py-2  bg-white px-[20px] grid-cols-5 items-center'>
                        <img className='w-[50px] h-[50px] rounded-full' src={value.img} alt="rasm" />
                        <p>{value.name}</p>
                        <h3>{value.price}</h3>
                        <p>{value.description.slice(0,15)}</p>
                        <div className='flex gap-3'>
                            <button className='cursor-pointer bg-[#FCB600] text-white py-2 px-3 rounded-lg '>Edit</button>
                            <button onClick={()=>deleteList(value.id)} className='cursor-pointer bg-[crimson] text-white py-2 px-3 rounded-lg '>Delete</button>
                        </div>
                    </div>
                    
                )
            })
        }
    </div>
  )
}
