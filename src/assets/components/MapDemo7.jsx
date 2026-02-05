import React from 'react'

export const MapDemo7 = () => {
    var electronicitems=[
        {id:"1",name:"mobile phone",brand:"samsung",price:"25000",warranty:"1 year",},
        {id:"1",name:"laptop",brand:"dell",price:"65000",warranty:"2 year",},
        {id:"1",name:"smart tv",brand:"lg",price:"45000",warranty:"1 year",},
        {id:"1",name:"headphone",brand:"boat",price:"2500",warranty:"6 months",},
        
    ]
  return (
    <div style={{textalign:"center"}}>
        <h1>MapDemo7</h1>
        <table classname="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>BRAND</th>
                    <th>PRICE</th>
                    <th>WARRANTY</th>
                </tr>
            </thead>
            <tbody>
                {
                    electronicitems.map((e)=>{
                        return<tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.brand}</td>
                            <td>{e.price}</td>
                            <td>{e.warranty}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
  )
}
