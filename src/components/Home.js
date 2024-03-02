import { useState,useEffect } from "react"
import React from 'react'
import axios from "axios";
import { ImgCard } from "../ImgCard";

export const Home = () => {

    const [search,setSearch]= useState('');
    const [data,setData]=useState([]);
    const handler = e =>{
        setSearch(e.target.value);
    }
    useEffect(()=>{
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en')
      .then(
        res=>setData(res.data)
      )
    },[])

  return (
    <>
     <div  className='header'>
        <input value={search} onChange={handler} placeholder='search for crypto'></input>
    </div>

    {
      data.length>0 && 
      <div className="grid-container">
        {
          data.filter(crypto => crypto.name.toLowerCase().includes(search.toLowerCase(s)))
          .map(crypto=>
            <ImgCard
            name={crypto.name} rank={crypto.market_cap_rank} price={crypto.current_price} marketCap={crypto.market_cap} key={crypto.id} url={crypto.image}
            ></ImgCard>)
        }
      </div>
    }
    </>
   
  )
}
