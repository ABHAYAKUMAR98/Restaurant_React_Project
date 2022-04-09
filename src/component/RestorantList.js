import React,{ useState, useEffect } from 'react'
import '../App'
import {Table} from 'react-bootstrap'
import {
  NavLink
 
  } from 'react-router-dom';
const RestorantList = () => {
 
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    fetch('http://localhost:4001/Restaurant')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div className='mt-4'>
<h1 align="center">List Data</h1>
  <Table striped bordered hover variant="dark">
    

      <thead>
      <tr className='trr'>
        <th>Id</th>
        <th>Rest. Name</th>
        <th>Rest. address</th>
        <th>Rest. email</th>
        <th>Update</th>
      </tr>
      </thead> 
      {
          Users.map((item,i)=>(
            <tbody>
     <tr>            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.email}</td>
            <td><NavLink className={'link'} to={"/update/"}>Update</NavLink></td>
            </tr>

            </tbody>
          ))
        }
      </Table>
 
    </div>
    
   

  )
}

export default RestorantList;