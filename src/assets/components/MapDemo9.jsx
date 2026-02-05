import React from 'react'

export const MapDemo9 = () => {
    var bags=[
        {id:"1",bagname:"school bag",type:"backpack",brand:"skybage",material:"polyester",price:"1200",},
        {id:"1",bagname:"laptop bag",type:"office",brand:"hp",material:"ny lon",price:"2000",},
        {id:"1",bagname:"travel bag",type:"duffle",brand:"safari",material:"canvas",price:"2500",},
        {id:"1",bagname:"handbag",type:"fashion",brand:"lavie",material:"leather",price:"3000",},
        
    ]
  return (
    <div style={{textalign:"center"}}>
        <h1>MapDemo9</h1>
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>BAGNAME</th>
                    <th>TYPE</th>
                    <th>BRAND</th>
                    <th>MATERIAL</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    bags.map((b)=>{
                        return<tr>
                            <td>{b.id}</td>
                            <td>{b.bagname}</td>
                            <td>{b.type}</td>
                            <td>{b.brand}</td>
                            <td>{b.material}</td>
                            <td>{b.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
  )
}
