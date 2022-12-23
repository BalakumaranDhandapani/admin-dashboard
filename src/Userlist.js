import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Userlist() {
  const userdata = [
    {
      id: 1,
      name: "Tiger Nixon",
      mail: "nixon@gmail.com",
      country: "India",
      state: "TamilNadu",
      city: "Chennai"
    },
    {
      id: 2,
      name: "Timothy Mooney",
      mail: "mooney@gmail.com",
      country: "USA",
      state: "Washington",
      city: "Seattle"
    },
    {
      id: 3,
      name: "Vivian Harrell",
      mail: "harrell@gmail.com",
      country: "India",
      state: "Kerala",
      city: "Kochin"
    }
  ]
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User-List</h1>
        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create User
        </Link>
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>E-Mail</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {userdata.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.mail}</td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      <td>{user.country}</td>
                      <th>
                        <Link to={`/portal/user-view/${user.id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
                        <button className='btn btn-info btn-sm mr-1'>Edit</button>
                        <button className='btn btn-danger btn-sm mr-1'>Delete</button>
                      </th>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userlist