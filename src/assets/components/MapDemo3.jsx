import React from 'react'

export const MapDemo3 = () => {
    var usres=[
        {id:1,name:"raj",age:23,marks:34,city:"ahemdabad",gender:"male"},
        {id:1,name:"raj",age:23,marks:34,city:"ahemdabad",gender:"male"},
        {id:1,name:"raj",age:23,marks:34,city:"ahemdabad",gender:"male"},
    ]
  return (
    <div style={{textalign:"center"}}>
        <h1>MapDemo3</h1>
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARK</th>
                    <th>CITY</th>
                    <th>GENDER</th>

                </tr>
            </thead>
            <tbody>
                {
                    student.map((st)=>{
                        return<tr>
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
