import React,{ useState}  from 'react'
import {Form,Button} from 'react-bootstrap'
function RestorantUpdate(){
  const [name,setName]=useState("")
  const[address,setAddress]=useState("")
  const[email,setEmail]=useState("")

  function Submithandle(e){
    e.preventDefault();
    let data={name,email,address};
    console.log(data,"data")
fetch("http://localhost:4001/Restaurant",{
  method:"PUT",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(data)
  
}).then((data)=>{
  alert("Restaurant has been added")
})
  }
  return (
    <div className='container bg-white'>
    <div className='row '>
      
      <div className='col-sm-3'></div>
      <div className='col-sm-6 md-3'>
      <h1 align='center' className='header p-3'>Update  Restuarant :)</h1>
        <Form onSubmit={Submithandle}>
    
      <Form.Label>Restaurant Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Restaurant Name" value={name}  onChange={(e)=>{setName(e.target.value)}} />
      <Form.Label>Restaurant Address</Form.Label>
      <Form.Control type="text" placeholder="Enter Restaurant Address" value={address}  onChange={(e)=>{setAddress(e.target.value)}} />
      <Form.Label>Restaurant Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter Restaurant email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    
    <Button  variant="primary" type="submit" >
      Submit
    </Button>
  </Form>
  
  
  
  
      </div>
  
    </div>
  
  </div>
  )
}

export default RestorantUpdate