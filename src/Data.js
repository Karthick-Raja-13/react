import React, { useState } from 'react'
import "./Data.css"
const Data = () => {
    const [name,setName] = useState("")
    const [dpmt,setDpmt] = useState("")
    const [students,setStudents] = useState([])
    const submitHandle=(e)=>{
        e.preventDefault()
        setStudents( [...students,{
            name,
            dpmt
        }])
        setName("")
        setDpmt("")
    }
  return (
    <div>
        <form>
        <label htmlFor='name'>Enter the Name of the Student</label><br />
        <input id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor='dpmt'>Select Department</label>
        <select id='dpmt' value={dpmt} onChange={(e)=>setDpmt(e.target.value)}>
            <option>Select Department</option>
            <option >BCA</option>
            <option value="BSC">BSC</option>
            <option value="BA">BA</option>
        </select>
        <button onClick={(e)=>submitHandle(e)} id='submit'>
            Submit
        </button>
        </form>
        <div>
            <ul>
            {
                students.map((detail,ind)=>{
                    return(
                        <li key={ind}>
                            {`Name : ${detail.name}`}<br />{`Department : ${detail.dpmt}` }
                        </li>
                    )
                })
            }
            </ul>
        </div>
    </div>
    
  )
}

export default Data
