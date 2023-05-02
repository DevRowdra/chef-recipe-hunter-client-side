import React, { useContext, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Loading from './Loading';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const navigation = useNavigation()
    console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }
  const {loginUser}=useContext(AuthContext)
const handleLogin=(e)=>{
    e.preventDefault()
    const from=e.target
    
    const email=from.email.value
    const password=from.password.value
    console.log(from,email,password)
    setError('')
    setSuccess('')
    loginUser(email,password)
    .then((result)=>{
        const loginUser=result.user
        console.log(loginUser)
        setSuccess('user login success fully')
    })
    .catch((error)=>{
        console.log(error)
        setError(error.message)
    })

}






  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Cooking is one of the greatest gifts.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                    <p>New in this site !! <Link  className="label-text-alt link link-hover text-base" to={'/register '}>Register Now</Link> </p>
                 
                </label>
              </div>
              <p className='text-red-500'>{error }</p>
              <p className='text-green-500'>{success}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
