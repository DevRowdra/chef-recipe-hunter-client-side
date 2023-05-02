import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Header = () => {


const{user,logoutUser}=useContext(AuthContext)

const handleLogout=()=>{
logoutUser()
.then(()=>{
  console.log('logout com')
})
.catch((error)=>{
  console.log(error.message)
})
}


    return (
        <div >
      <div className="navbar bg-transparent">
        <div className="flex-1 ">
        <Link to={'/'}>BongDine</Link>
        </div>
        
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to={'/blog'}>Blog</Link>
            </li>
            
            <li>
              <Link to='/register'>Register</Link>
            </li>
           {user &&  <li>
              <p className='bg-gray-400 text-slate-50' >{user.displayName}</p>
            </li>}
          </ul>
          
         {user ? <button onClick={handleLogout} className="btn btn-active btn-warning rounded-md">
            LogOut
          </button> :
          <button className="btn btn-active btn-warning rounded-md">
           <Link to='/login'>Login</Link>
          </button>}
        </div>
      </div>
    </div>
    );
};

export default Header;