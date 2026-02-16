import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo11 = () => {

  const {register,handleSubmit} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)
  //handleSubmit --> form -->submmit -->handleSubmit --> it will handle submit...
  //register is a function which is use for register input...

  //callback function
  const submitHandler = (data)=>{
    console.log(data) //{} object
    setuserData(data)
    setisSubmited(true)
  }
  
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo11</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>NAME</label>
            <input type='text' placeholder='enter name' {...register("firstName")}></input>
          </div>
          <div>
            <label>AGE</label>
            <input type='text' {...register("age")}></input>
          </div>
          <div>
            <label>ADDRESS</label>
            <input type='text' {...register("address")}></input>
          </div>

          <div>
            <label>GENDER</label>  <br></br>
            MALE:<input type='radio' value="male" {...register("gender")}></input>
            FEMALE:<input type='radio' value="female" {...register("gender")}></input>
          </div>
          <div>
            <label>COLLAGE NAME</label>
            <input type='text' {...register("collage name")}></input>
          </div>
          <div>
            <label>SUBJECT</label> <br></br>
            ENGLISH :<input type='checkbox' value="english" {...register("subject")}></input>
            MATHS :<input type='checkbox' value="maths" {...register("subject")}></input>
            HINDI :<input type='checkbox' value="hindi" {...register("subject")}></input>
            SCIENCE :<input type='checkbox' value="science" {...register("subject")}></input>
            DREWING :<input type='checkbox' value="drewing" {...register("subject")}></input>
            GUJRATI :<input type='checkbox' value="gujrati" {...register("subject")}></input>


          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1>Name = {userData.firstName}</h1>
          <h2>Age = {userData.age}</h2>
        </div>
          }
        
    </div>
  )
}