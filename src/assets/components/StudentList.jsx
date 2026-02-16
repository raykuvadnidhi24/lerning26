// import React from 'react'
// import { SubStudentList } from './SubStudentList'

// export const StudentList = (props) => {
//   // console.log("stulist",props)
//   console.log(Array.isArray(props.student));

//   //props --> property
//   //props -->keyeord  no
//   //props --> datatype -->object
//   //props -- {title:"...."}
//   //updated -->{title:"",compnay:{}}
//   //updated -->{title:"",compnay:{},employees:[{}]}
//   return (
//     <div style={{textAlign:"center"}}>
//         <h1>StudentList</h1>
//         {props.title}
//         <h1>{props.school.name}</h1>
//         <h1>{props.school.year}</h1>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>NAME</th>
//               <th>AGE</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               props.student.map((stu)=>{
//                 return <tr>
//                   <td>{stu.id}</td>
//                   <td>{stu.name}</td>
//                   <td>{stu.age}</td>
//                 </tr>
//               })
//             }
//           </tbody>
//         </table>

//         <SubStudentList title = {props.title}></SubStudentList>
//     </div>
//   )
// }