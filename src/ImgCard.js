import React from 'react'

export const ImgCard = (props) => {
  return (
  <>
 <div> <img src={props.url} alt={props.name} width='70' height= '70'/>
  <p>Name:{props.name}</p>
  <p>Rank :{props.rank}</p>
  <p>Price :{props.price}</p>
  <p>MarketCap :{props.marketCap}</p></div>
  </>
  )
}
