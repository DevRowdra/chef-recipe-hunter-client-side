import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log('logout com');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='overflow-hidden'>
      <div className="navbar bg-transparent flex-col md:flex-row">
        <div className="flex-1 flex-row ">
          <Link className='lg:text-2xl lg:font-semibold text-4xl bg-yellow-500 p-2 rounded-xl ' to={'/'}>BongDine</Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending ' : isActive ? 'active ' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={ ({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
               
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                 }
              >
                Register
              </NavLink>
            </li>

            {user && (
              <div class="avatar relative">
                <div class="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
                
                <div className='bg-black text-center bg-opacity-50 text-white rounded-full absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 '>
                <p className="relative top-3" title={user.displayName} >{user?.displayName ?.substring(0, 5)}</p>
              </div>
               
              </div>
            )}
          </ul>

          {user ? (
            <Link
              onClick={handleLogout}
              className="btn btn-active btn-warning rounded-md "
            >
              LogOut
            </Link>
          ) : (
            <button className="btn btn-active btn-warning  rounded-md">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
