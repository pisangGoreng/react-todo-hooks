import React from 'react';

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </thead>

      <tbody>
        {
          users.length > 0 ?
             (
              users.map(user => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                      <button>Delete</button>
                      <button>Edit</button>
                    </td>
                  </tr>
                )
              })
            ) :
             (
              <tr>
                <td colSpan={4}>No Users found</td>
              </tr>
            )
        }

      </tbody>
    </table>
  )
}

export default UserTable