import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'


const Add = () => {
  const [employee,setEmployee]=useState({
    empId:'',
    empName:'',
    department:'',
    location:''
    
  })
  const fetchValue=(e)=>{
    // console.log(e)
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  let sendData=(event)=>{
    console.log(employee)
  }
  return ( <div>
    <h2>employee</h2>
    
    <TextField id="standard-basic" label="Employee ID" variant="standard" name="Employee ID" 
    // value={employee.empId}
     onChange={fetchValue}/><br />   
    <TextField id="standard-basic" label="Employee Name" variant="standard" name="Employee Name" 
    // value={employee.empName}
     onChange={fetchValue}/><br />
    <TextField id="standard-basic" label="Employee dept" variant="standard" name="Employee dept" 
    // value={employee.department} 
    onChange={fetchValue}/><br />
    <TextField id="standard-basic" label="Employee location" variant="standard" name="Employee location"
    //  value={employee.location}
    onChange={fetchValue}/> <br /><br />
    <Button variant="contained" onClick={sendData}>submit</Button> <br /></div>
  )
}

export default Add