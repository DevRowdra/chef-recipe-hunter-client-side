import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const Register = () => {
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const {createUser,loginWithGoogle}=useContext(AuthContext)

const navigate=useNavigate()

const handleRegister=(e)=>{
    e.preventDefault()
    const from=e.target
    const name=from.name.value
    const email=from.email.value
    const password=from.password.value
    const photo=from.photo.value
setError('')
setSuccess('')
    console.log(name,email,password)

    createUser(email,password)
    .then(result=>{
        const loggingUser=result.user
        console.log(loggingUser)
        updataUserName(loggingUser,name,photo)
        setSuccess('Account Created Successfully')
        navigate('/')
    })
    .catch(error=>{
        console.log(error.message)
        setError(error.message)
    })
}
const updataUserName=(user,name,photo)=>{
     updateProfile(user,{
        displayName:name,
        photoURL:photo
    })
    .then(()=>{
        console.log('updata user name')
    })
    .catch((error)=>{
        console.log(error.message)
    })
}
const googleprovider = new GoogleAuthProvider();
const handelGoogleLogin=()=>{
  loginWithGoogle(googleprovider)
  .then((result=>{
      const googleloged=result.user
      console.log(googleloged)
      navigate('/')
  }))
  .catch(error=>{
      console.log(error.message)
  })
}
const githubProvider= new GithubAuthProvider();
const handelGithubLogin=()=>{
  loginWithGoogle(githubProvider)
  .then((result=>{
      const githubloged=result.user
      console.log(githubloged)
      navigate('/')
  }))
  .catch(error=>{
      console.log(error.message)
  })
}

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">No one can make it like us</p>
            <button onClick={handelGoogleLogin} className="btn m-2  bg-slate-400">Login with Google </button>
            <button onClick={handelGithubLogin} className="btn  m-2 bg-slate-400">Login with GitHub </button>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name='name'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
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
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  name='photo'
                  className="input input-bordered"
                />
                <label className="label">
                    <p>Already Have An Account ? <Link  className="label-text-alt link link-hover text-base" to={'/login '}>Login Now</Link> </p>
                 
                </label>
              </div>
              <p className='text-red-500'>{error }</p>
              <p className='text-green-500'>{success}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
