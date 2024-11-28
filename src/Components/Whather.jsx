import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Whather = () => {
  const[city,setCity]=useState('');
  const [result,setResult]=useState('');
   const handelerChange=(e)=>{
     setCity(e.target.value)
   }
   const submitHandler=(e)=>{
    e.preventDefault();
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
    response=>response.json()
   ).then(data=>{
       const kelvin=data.main.temp;
       const celsius=kelvin-273.15;
      //  console.log(celsius);
      setResult("Tempeature at"+" "+city+"\n"+Math.round(celsius)+"C");
      setCity("")
       
   }
   ).catch(error=>console.log(error)
   )
    
    
   }
  return (
    <center className='mt-5 '>
            <div className="card bg-primary  mobile_view">
               <div className="card-body">
                  <h1 className="card-title text-white">
                      Whather App
                  </h1>
                  <Link to='/signIn' className='text-white fs-4'>SignIn</Link>
                  <form onSubmit={submitHandler}>
                     <input type="text" placeholder='Enter city' name='city' value={city} onChange={handelerChange} className='form-control w-75 mt-3' /><br /><br />
                     <button className='btn btn-success'>Get Temperature</button>
                  </form>
                  <h2 className='text-white mt-3'>{result}</h2>
               </div>
            </div>
    </center>
  )
}

export default Whather ;
