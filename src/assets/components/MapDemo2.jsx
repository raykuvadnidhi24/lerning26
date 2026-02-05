import React from 'react'

export const MapDemo2 = () => {
    var users=[
        {id:1,name:"raj",age:23,gender:"male"},
        {id:1,name:"raj",age:23,gender:"male"},
        {id:1,name:"raj",age:23,gender:"male"},

    ]
  return (
    <div>
        MapDemo2
        {
            users.map((user)=>{
                return<li>{user.id}-{user.name}-{user.age}-{user.gender}</li>
            })
        }</div>
  )
}
