import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Register() {
    const [passstring, setpassstring] = useState("")
    const [users, setusersdata] = useState([])

    function handlecp(e) {

        setusersdata(
            {
                ...users,[e.target.name]:e.target.value
            }
        )

        if(e.target.name==="password" || "confirm-password")
        {
        const data = document.getElementById('p');
        const data1 = (data.value);
        console.log(data1);
        const data2 = e.target.value
        console.log(data2);
        if (data1.length !== data2.length) {
            setpassstring("*Your confirm password should be same as your password!")
        }
        else if (data1.length === data2.length) {
            if (data1 == data2) {
                setpassstring("")
            }
        }
      }
      
    }
   function handlesubmit(e)
    {
        e.preventDefault();
        console.log(users);
        adduser(users)
        alert("User Added Successfully ")
    }

    async function adduser(users)
    {
       const data=await axios.post("http://127.0.0.1:8085/users/add",users)
       console.log(data);

    }
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-5 mx-auto justify-content-center \
            gap-2 text-white login_color py-2 rounded' id="mymodel" >
                <h3 className='login_head text-center'>Create Your Account</h3>
                <form action=''  >
                    <div className='input'>
                        <label htmlFor='firstname'>FirstName</label>
                        <input type='text' className='form-control' name='firstname'
                            autoComplete='off' id='fn' onChange={handlecp} required />
                    </div>
                    <div className='input'>
                        <label>LastName</label>
                        <input type='text' className='form-control' name="lastname"
                            autoComplete='off' id='ln' onChange={handlecp} />
                    </div>
                    <div className='input'>
                        <label>Email</label>
                        <input type='email' className='form-control' name="email"
                            autoComplete='off' required id='email' onChange={handlecp} />
                    </div>
                    <div className='input'>
                        <label htmlFor='password'>Passsword</label>
                        <input type='password' id='p' className='form-control' name="password"
                            autoComplete='off' onChange={handlecp}/>
                    </div>
                    <div className='input'>
                        <label htmlFor='confirm-password'>Confirm-Passsword</label>
                        <input type='password' id="cp" className='form-control' name="confirm-password"
                            autoComplete='off' onChange={handlecp} />
                    </div>
                    <div style={{ fontSize: "12px", color: "red", fontWeight: "bold" }}>{passstring}</div>
                    <div className=''>
                        <input type='checkbox' />
                        <span className='mx-2'>I accept the term and Conditions</span>
                    </div>
                    <div className='button'>
                        <Button type="submit" className='login_button' onClick={handlesubmit}>Submit</Button>
                    </div>
                    <div className='text-center'>
                        <p className='input'>Already have an account? <Link to="/loginSignup" className='same_link'>Login!</Link></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Register
