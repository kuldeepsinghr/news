import React from 'react'
import { useContext } from 'react'
import { Context } from '../context'

function Main() {
  const {data} =useContext(Context)

  return (


    <>
    <section className='container'>

    <div className='grid grid-cols-2 mx-5 my-10 gap-5'>

        {
          data.map((value)=>{
            const {title, url, author, num_comments}=value
            return (<>
              <div className='px-8 py-4 bg-gray-100 rounded-md hover:shadow-xl shadow-sm hover:-translate-y-2 duration-200 h-[35vh] w-[100%] m-auto'>
                <h1 className='text-3xl mx-5 mb-4 font-bold text-left'>{title}</h1>
                <p className='text-gray-600 mx-5'>By {author}</p>
                <div className='flex justify-between items-center mt-8'>
                  <a className='bg-green-500 px-6 py-2 rounded text-white font-bold hover:bg-green-600 duration-300' target="_blank" href={url}>Read More</a>
                  <p className='text-red-500'>{num_comments} Comments</p>
                </div>
              </div>
            </>)
          })
        }
        </div>
          </section>
    </>
  )
}

export default Main