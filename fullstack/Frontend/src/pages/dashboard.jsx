import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
function Dashboard() {
  const [count, setCount] = useState(0)
  const location=useLocation()
  const [userdata,setUserdata]=useState("");

  // function displaydata(){
  //   setUserdata(location.state);
  //   //console.log(userdata)
  //   console.log(location.state)
  // }

  useEffect(()=>{setUserdata(location.state);},[])
  return (
    <>
    <h1 className="text-3xl font-bold text-blue-500">
        Dashboard
      </h1>
    
      <div>{userdata.user}</div>
      <div>{userdata.pass}</div>
      <br></br>
      {/*<button onClick={displaydata}>button</button>*/}
    </>
  )
}

export default Dashboard

