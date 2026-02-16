import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo12 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    //errors -->{}
    console.log("errors...",errors) //{}

    const validationSchema = {
        
        ageValidator:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"min age should be 18*"
            },
            max:{
                value:60,
                message:"max age should be 60*"
            }
        },
        pincodeValidator:{
            required:{
                value:true,
                message:"pincode is Required*"
            },
            min:{
                value:6,
                message:"min age should be 18*"
            },
            max:{
                value:9,
                message:"max age should be 60*"
            }
        },
        numberValidator:{
            required:{
                value:true,
                message:"number is Required*"
            },
            min:{
                value:6,
                message:"min age should be 18*"
            },
            max:{
                value:9,
                message:"max age should be 60*"
            }
        },
        addressValidator:{
            required:{
                value:true,
                message:"address is required*"
            },
            minLength:{
                value:5,
                message:"min 5 char is required"
            },
            maxLength:{
                value:20,
                message:"max 20 char is accepted****"
            }
        }


    }




    const submitHandler = (data)=>{
        alert("form subbmited...")
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo12</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME:</label>
                <input type='text' {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age && errors.age.message}
            </div>
            <div>
                <label>ADD</label>
                <input type='text' {...register("add",validationSchema.addressValidator)}></input>
                {errors.add?.message}
            </div>
             <div>
                <label>PINCODE</label>
                <input type='text' {...register("pincode",validationSchema.pincodeValidator)}></input>
                {errors.pincode && errors.pincode.message}
            </div>
             <div>
                <label>MOBILE NUMBER</label>
                <input type='text' {...register("number",validationSchema.numberValidator)}></input>
                {errors.number && errors.number.message}
            </div>
            
            <div>
                <input type='submit'></input>
            </div>

        </form>

    </div>
  )
}