import React from 'react'

const UserCard = ({ user, deleteUser, setUserUpdate,handleChangeShowModal }) => {
 
 const handleChangeClickUpdate = () =>{
setUserUpdate(user)
handleChangeShowModal()
 }
 
  return (
    <article className='user'>
      <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='user__list'>
        <li className='user__item'><span>Email</span> {user.email}</li>
        <li className='user__item'><span><i className='bx bxs-gift'></i>Birthday</span> {user.birthday}</li>
      </ul>
      <div className='user__container-btn'>
        <button className='user__btn'onClick={() => deleteUser(user.id)}>
      <i className ='bx bxs-trash'></i>

      </button>
      <button className='user__btn'onClick={handleChangeClickUpdate} >
            <i className ='bx bx-pencil'></i>
      </button>
      </div>
      
    </article>
  )
}

export default UserCard