import React, { useState } from 'react';

function ButtonUtami (props) {
  return (
    <button
      className="button-primary"
      type="submit"
      onClick={(event) => {
      event.preventDefault()
      if (props.user.name && props.user.username) {
        props.addUserMethod(props.user)
        props.setUser({...props.user, name: '', username: ''})
      }
    }}>Add user</button>
  )
}

const AddUserForm = (props) => {
  const [user, setUser] = useState({id: null, name: '', username: ''})

  return (
    <form>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        name='name'
        value={user.name} // 123
        onChange={(event) => {
          setUser({...user, name: event.target.value}) // ! khusus buat ngerubah name
        }}
      />

      <label>Username</label>
      <input
        className="u-full-width"
        type="text"
        name='username'
        value={user.username}
        onChange={(event) => {
          setUser({...user, username: event.target.value}) // ! khusus untuk ngerubah username
        }} />

      <ButtonUtami
        user={user}
        addUserMethod={props.addUserMethod}
        setUser={setUser}
      />
    </form>
  )
}

export default AddUserForm;