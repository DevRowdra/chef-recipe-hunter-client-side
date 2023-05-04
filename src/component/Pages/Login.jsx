import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import Loading from './Loading';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // const navigation = useNavigation();
  const navigate=useNavigate()
  // console.log(navigation.state);
  // if (navigation.state === 'loading') {
  //   return <Loading></Loading>;
  // }
const location=useLocation()
console.log(location)
const froms=location.state?.from?.pathname || '/'
// console.log('first',from)
  const { loginUser,loginWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;

    const email = from.email.value;
    const password = from.password.value;
    console.log(from, email, password);
    setError('');
    setSuccess('');
    loginUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setSuccess('user login success fully');
        navigate(froms || { replace: true })
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const googleprovider = new GoogleAuthProvider();
  const handelGoogleLogin=()=>{
    loginWithGoogle(googleprovider)
    .then((result=>{
        const googleloged=result.user
        console.log(googleloged)
        navigate(froms )
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
        navigate(froms || "/")
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
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Cooking is one of the greatest gifts.</p>
            <button onClick={handelGoogleLogin} className="btn m-2  bg-slate-400">Login with Google </button>
            <button onClick={handelGithubLogin} className="btn  m-2 bg-slate-400">Login with GitHub </button>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleLogin}
              className="card-body"
            >
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
                  <p>
                    New in this site !!{' '}
                    <Link
                      className="label-text-alt link link-hover text-base"
                      to={'/register '}
                    >
                      Register Now
                    </Link>{' '}
                  </p>
                </label>
              </div>
              <p className="text-red-500">{error}</p>
              <p className="text-green-500">{success}</p>
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
