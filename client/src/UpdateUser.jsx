import React from 'react'
import { Link } from 'react-router-dom'

function UpdateUser() {
  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
       <div className="w-50 bg-white rounded p-3">
            <form action="">
                <h2 className="">Update User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text " placeholder='Enter Your Name' className='form-control' />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email " placeholder='Enter a Email' className='form-control' />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text " placeholder='enter your age' className='form-control' />
                </div>
                <button className='btn btn-success '>Submit</button>
                <Link to="/" className='btn btn-danger mx-2'>Cancel</Link>

                
            </form> 

       </div>

    </div>
  )
}

export default UpdateUser