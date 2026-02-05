import React from 'react'

export const MapDemo6 = () => {
    var student=[
        {id:"1",name:"Tisha",age:12,marks:80,city:"ahemdabad",gender:"female"},
        {id:"1",name:"priya",age:21,marks:56,city:"rajkot",gender:"female"},
        {id:"1",name:"vivek",age:24,marks:95,city:"vadodara",gender:"male"},
    ]
  return (
    <div style={{textalign:"center"}}>

    <h1>MapDemo6</h1>

        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((st)=>{
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
