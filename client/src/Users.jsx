import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([{
        Name: "Edson John Litsur", 
        Email: "johnlitsur@gmail.com",
        Age: 23
    }]) 
  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
       <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-primary">Add User +</Link>   
        <table className='table'>
             <thead>
                <tr>
                    <th className="">Name</th>
                    <th className="">Email</th>
                    <th className="">Age</th>
                    <th className="">Action</th>
                </tr>
             </thead>
             <tbody>
                {
                    users.map((user) => {
                       return  <tr className="">
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Age}</td>
                            <td>
                                <Link to="/update" className='btn btn-success' >Edit</Link>
                                <button>Delete</button>
                            </td>

                        </tr>
                    })
                }
             </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
