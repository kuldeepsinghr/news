import React from 'react'
// import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../context'

function Search() {

    const {search, setSearch, handleOnSearch}=useContext(Context)
    // const {search, setSearch}=useContext(Context)
    // const [search, setSearch]=useState('react')

  return (
    <>
    <section className='container'>
        <div className='flex items-center justify-center my-10 gap-20'>
            <input type="text" placeholder='search here' className='px-6 py-2 text-xl shadow-lg'
            value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button onClick={handleOnSearch} className='bg-green-500 px-6 py-2 rounded text-white font-bold hover:bg-green-600 duration-300'>Search</button>
        </div>
    </section>
    </>
  )
}

export default Search