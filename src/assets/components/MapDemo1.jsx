import React from 'react'

export const MapDemo1 = () => {
    let cars=["bmw","rr","merci","mustang","lambo"]
  return (
    <div>
        <h1>MapDemo1</h1>
        {
            cars.map((c)=>{return<h1>{c}</h1>})
        }
        </div>
  )
}


