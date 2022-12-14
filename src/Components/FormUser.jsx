import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''
}

// const validationEmail = {
//   require: 'Email is required',
//   minLength: {
//     mesage: 'Email is too short',
//     value: 3
//   },
//   maxLength: {
//     message: 'Email is to long',
//     value: 8
//   },
//   pattern: {
//     menssage: 'Write a valid email',
//     value: regularExpresion
//   }
// }



const FormUser = ({ createUser, userUpdate, updateUser, isShowForm, handleChangeShowModal }) => {

  const { handleSubmit, register, reset, formState: {errors} } = useForm();

  const submitForm = (data) => {
    if (userUpdate) {
      updateUser(userUpdate.id, data);
    } else {
      createUser(data);
    }
    reset(defaultValues);

  };

const regularExpresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  const tittleForm = userUpdate ? 'Edit user' : 'New User'

  const textButton = userUpdate ? 'Edit user' : 'Add new user'



  useEffect(() => {
    if (userUpdate) {
      reset(userUpdate)
    }else{
      reset(defaultValues)
    }
  }, [userUpdate])


  return (
    <div className={`container-form ${isShowForm ? '' : 'disable-form'} `}>
      <form className='form' onSubmit={handleSubmit(submitForm)}>
        <i onClick={handleChangeShowModal} className='form__x bx bx-x'></i>
        <h2 className='form-title'>{tittleForm}</h2>
        <div className='form__div'>
          <label className='form_lable' htmlFor=''>Email</label>
          <input className='form_input' placeholder='Enter your Email' type='email' {...register('email', {
            required: 'Email is required',
            minLength: {
              message: 'Email is too short',
              value: 1
            },
            maxLength: {
              message: 'Email is to long',
              value: 25
            },
            pattern: {
              menssage: 'Write a valid email',
              value: regularExpresion
            }
          }
          )} />{errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className='form__div'>
          <label className='form_lable' htmlFor=''>Password</label>
          <input  className='form_input' placeholder='Enter your Password' type='password'{...register('password')} />
        </div>

        <div className='form__div'>
          <label className='form_lable' htmlFor=''>First name </label>
          <input className='form_input' placeholder='Enter your First name' type='text' {...register('first_name')} />
        </div>

        <div className='form__div'>
          <label className='form_lable' htmlFor=''>Last Name</label>
          <input className='form_input' placeholder='Enter your Last name' type='text' {...register('last_name')} />
        </div>

        <div className='form__div'>
          <label  className='form_lable' htmlFor=''>Birthday</label>
          <input  className='form_input' type='date' {...register('birthday')} />
        </div>
        <button className='form_btn'>{textButton}</button>
      </form>
    </div >
  )
}

export default FormUser