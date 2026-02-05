import React from 'react'

export const MapDemo5 = () => {
    var student=[
        {id:"1",name:"raj",age:23,marks:34,city:"ahemdabad",gender:"male"},
        {id:"1",name:"daksh",age:23,marks:89,city:"rajkot",gender:"female"},
        {id:"1",name:"mann",age:23,marks:67,city:"vadodara",gender:"male"},
    ]
  return (
    <div style={{textalign:"center"}}>

        <h1>MapDemo5</h1>
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
                        return <tr style={{backgroundColor:st.gender==female&&pink}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color:st.age>24?"red":"black"}}>{st.age}</td>
                             {/* <td style={{backColor:st.marks>80?"yellow":"white"}}></td>  */
                             <td style={{backgroundColor:st.marks>80&&yellow}}>{st.marks}</td>}
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
