import React from 'react'

export const MapDemo4 = () => {
    var cities=[
        {id:"1",name:"Ahemdabad",pop:1000000,AQI:"302",},
        {id:"1",name:"Delhi",pop:8000000,AQI:"400",},
        {id:"1",name:"Dehradun",pop:9000000,AQI:"150",},
    ]
  return (
    <div style={{textalign:"center"}}>
        <h1>MapDemo4</h1>
        <table classname="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>POPULATION</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((c)=>{
                        return<tr>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.pop}</td>
                            <td>{c.AQI}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
  )
}
