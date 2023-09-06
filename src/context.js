import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context=createContext()

const AppProvider=({children})=>{

    const [search, setSearch]=useState('')
    const [click, setClick]=useState('React')

    const apiUrl=`https://hn.algolia.com/api/v1/search?query=${click}`
    const [data, setData]=useState([])
    // const [search, setSearch]=useState('react')

    const callingAPI = async (url)=>{
        const response = await fetch(url)
        const json = await response.json()
        console.log(json.hits)
        setData(json.hits)
    }

    const handleOnSearch=()=>{
        setClick(search)
    }

    useEffect(()=>{
        callingAPI(apiUrl)
    }, [click])

     return <Context.Provider value={{data, search, setSearch, handleOnSearch}}>{children}</Context.Provider>
}

export {Context, AppProvider}