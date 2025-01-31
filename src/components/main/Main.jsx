import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Products } from './products/products'

export const Main = () => {

    const [data, setData] = useState([])

    let base_url = import.meta.env.VITE_BASE_URL


    const request = async () => {
        try {
          const response = await axios.get(`${base_url}`)
          setData(response.data)
        } catch (error) {
          console.log(error.message)
        }
      }
    
    useEffect(()=>{
        request()
    },[])

    const deleteList = async(id)=>{
        try {
            await axios.delete(`${base_url}/${id}`)
            setData(data.filter((item) => item.id !== id))
            console.log("ochdi")
          } catch (error) {
            console.log(error.message)
          }
    }

    const addList =()=>{
        const addList = document.getElementById("addList")

        addList.style.right = "0"
    }
    const exitAdd =()=>{
        const addList = document.getElementById("addList")

        addList.style.right = "-100%"
    }
    const postlist = async () => {
        let postData = {
            img: "https://randomuser.me/api/portraits/men/45.jpg",
            name: "Product nomi",
            price: 59,
            description: "Smartfoningiz uchun himoya va uslubni birlashtirgan bardoshli g'ilof. Ishonchli material va chiroyli dizayn.",
            id: "20"
        }
        try {
          const response = await axios.post(`${base_url}`, postData)
          setData([...data, response.data])
          toast.success('Data successfully posted')
        } catch (error) {
          console.log(error.message)
        }
      }

  return (
    <div className='flex relative overflow-x-hidden'>
        <div  className='w-full bg-[#EDEFF3]'>
         <div className='px-[30px] w-full bg-white items-center flex border-b-2 border-gray-300 gap-[15px] py-[10px]'>
            <div className='border-r-2 border-gray-300'>
                <div className='max-w-[200px] flex items-center gap-[10px] '>
                    <button onClick={()=>addList()} className='w-[40px] h-[40px] flex justify-center items-center text-[24px] text-white rounded-[100%] bg-green-400 cursor-pointer'>+</button>
                    <p>Yangi kategoriya qo'shish</p>
                </div>
            </div>
            <div>
                <form className='border max-w-[500px] w-full rounded-md'>
                    <input type="text" className='outline-none px-[5px]' />
                    <button className='bg-[dodgerblue] text-white px-[10px] rounded-r-md cursor-pointer'>Search</button>
                </form>
            </div>
        </div>

        <div className='bg-white py-[10px]   mt-[20px]'>
            <div className='w-[80%] mx-auto grid grid-cols-5'>
            <div>
                <h3>MAXSULOT</h3>
            </div>
            <div>
                <h3>Kategoriya</h3>
            </div>
            <div>
                <h3>NARXI</h3>
            </div>
            <div>
                <h3>QOSHIMCHA</h3>
            </div>
            <div>
                <h3>ACTION</h3>
            </div>
            </div>
        </div>

        <div className='w-[90%] mt-[15px] mx-auto'>
              <Products data={data} deleteList={deleteList} />  
        </div>

    </div>
    <div id='addList' className= ' absolute h-full right-[-50%] bg-white w-[30%] px-2 py-3 flex flex-col'>
        
        <div className='flex justify-between px-[15px]'>
            <h3 className='font-bold text-xl'>Yangi mahsulot qoshish</h3>
            <button onClick={()=>exitAdd()} className='text-2xl cursor-pointer'>x</button>
        </div>

        <ul className='py-10 flex flex-col gap-4'>
            <li className='px-3'>
                <span>Mahsulot nomi</span>
                <input type="text"  className=' px-1 py-2 outline-none border rounded border-gray-300 w-full' />
            </li>
            <li className='px-3'>
                <span>Mahsulot narxi</span>
                <input type="text"  className=' px-1 py-2 outline-none border rounded border-gray-300 w-full' />
            </li>
            <li className='px-3'>
                <span>Mahsulot texti</span>
                <input type="text"  className=' px-1 py-2 outline-none border rounded border-gray-300 w-full' />
            </li>
            <li className='px-3'>
                <input type="file" className='border py-2 px-2 cursor-pointer' />
            </li>
        </ul>
        <button onClick={()=>postlist()} className='py-2 font-bold cursor-pointer rounded-lg bg-green-400 text-white '>Submit</button>
    </div>
    </div>
  )
}
