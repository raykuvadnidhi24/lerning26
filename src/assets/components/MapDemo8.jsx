import React from 'react'

export const MapDemo8 = () => {
    var ststioneryitems=[
        {id:"1",name:"pen",category:"writing",brand:"reynolds",price:"10",quantity:"100",},
        {id:"1",name:"notebook",category:"paper",brand:"classmate",price:"60",quantity:"60",},
        {id:"1",name:"pencil",category:"writing",brand:"apsara",price:"5",quantity:"200",},
        {id:"1",name:"eraser",category:"accessory",brand:"nataraj",price:"5",quantity:"150",},
        {id:"1",name:"geometry box",category:"math",brand:"camlin",price:"120",quantity:"30",},
        
        
    ]
  return (
    <div style={{textalign:"center"}}>
        <h1>MapDemo8</h1>
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>PRICE</th>
                    <th>QUATITY</th>
                </tr>
            </thead>
            <tbody>
                {
                    ststioneryitems.map((s)=>{
                        return<tr>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.category}</td>
                            <td>{s.brand}</td>
                            <td>{s.price}</td>
                            <td>{s.quantity}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
  )
}
