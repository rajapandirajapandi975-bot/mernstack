import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  {/*const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function print(e) {
    e.preventDefault()
    console.log("Email: ", email)
    console.log("Password: ", password)
  }*/}

  const [formdata,setformdata]=useState({
    email:"",
    password:""
  })

  function print(e){
    e.preventDefault()
    console.log("Login Page",formdata)
    alert("Login Successfull")
    navigate("/dashboard",{state:formdata})
  }

  function handleChanges(e){
    setformdata({
      ...formdata,
      [e.target.name]:e.target.value}
    )
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">
        Hi!
      </h1>
      <br />
      <div>
        <form onSubmit={print}>
          <label>Email :</label>
          <input placeholder="Enter your email" required type="email" name='email' onChange={handleChanges}/>
          <br/>

          <label>Password :</label>
          <input placeholder="Enter your password" required type="password" name='password' onChange={handleChanges}/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login