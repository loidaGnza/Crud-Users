import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import FormUser from './Components/FormUser'
import UserCard from './Components/UserCard'


const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  // estado para almacenar 
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
const [isShowForm, setIsShowForm] = useState (false)


  // Funcion que optiene todo los usuarios 
  const getAllUsers = () => {
    const Url = `${BASE_URL}users/`
    axios.get(Url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  // Funcion que crea un usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        handleChangeShowModal()
      })
      .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUserUpdate()
        handleChangeShowModal()
      })
      .catch(err => console.log(err))

  }

const handleChangeShowModal = () =>{
  setIsShowForm(!isShowForm)
}


const handleCLickNewUser = () => {
  setUserUpdate()
  handleChangeShowModal()
}
  // se obtiene todos los usuarios al cargar 
  useEffect(() => {

    getAllUsers()

  }, [])

  
  return (
    <div className="App">
      <div className='header-container'>
      <h1 className='header__title'>Crud users</h1>
      <button onClick={handleCLickNewUser} className='header_btn' ><i className='bx bx-plus'></i>Create new user </button>
      
        <FormUser
        createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        isShowForm={isShowForm}
        handleChangeShowModal={handleChangeShowModal}
      />
      
      </div>
      
      <div className='users-container'>
      {
        users?.map(user => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            handleChangeShowModal={handleChangeShowModal}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
