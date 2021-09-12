import React, {useState} from 'react'
import './App.css';
import UserTable from './components/UserTable'
import AddUserForm from './components/UserForm'

const userList = [
  {
    id: 1,
    name: 'bambang',
    username: 'bambang_oke'
  },
  {
    id: 2,
    name: 'irwin',
    username: 'irwin_oke'
  }
]

/*
  <App>
    <UserForm />
    <UserTable />
  </App>
*/

function App() {
  const [users, setUsers] = useState(userList)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }


  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="five columns">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} /> {/* passing props function */}
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable users={users} /> {/* passing props */}
        </div>
      </div>
    </div>
  );
}

export default App;
