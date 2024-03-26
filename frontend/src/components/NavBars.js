import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../app/userSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function NavBars() {
  const { isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    console.log("not authenticated");
  } else {
    console.log("authenticated");
  }

  const handleLogout = async () => {
    console.log("logout button hit");
    dispatch(logOutUser());
    navigate('/signin');
  }

  return (
    <div>
      <div style={{height: "calc(100vh - 7rem)", marginTop: "3.5rem"}} className='bg-gray-100'>
          <Outlet />
      </div>

      <nav className="max-md:invisible fixed top-0 bg-black h-14 w-full flex items-center">
        <div className="flex w-2/3">
          <div>
            <span className="ms-10 text-2xl font-bold text-white">Management</span>
            <span className="ms-1 text-xs font-bold text-white">Chuwa</span>
          </div>
          <div className="ms-16 w-full bg-white rounded flex items-center">
            <input type="text" className="p-2 rounded w-full outline-none" placeholder="Search" />
            <i className="fas fa-search text-gray-400 mx-3"></i>
          </div>
        </div>
        <div className="flex w-1/3 justify-end">
          <div className="me-10 text-white">
            {isAuthenticated ?
              <button className="text-sm" onClick={handleLogout}><i className="far fa-user me-2"></i>Sign out</button> 
              : <Link className="text-sm" to="/signin" state={{ from: location.pathname }}><i className="far fa-user me-2"></i>Sign in</Link> }
            
            <button className="ms-7 text-sm"><i className="fas fa-cart-shopping me-2"></i>$0.00</button>
          </div>
        </div>
      </nav>

      <div className="max-md:invisible fixed bottom-0 left-0 right-0 bg-black h-14 flex justify-between items-center">
        <div className="w-1/3 flex">
          <span className="text-white text-xs ms-10">@2022 All Rights Reserved</span>
        </div>
        <div className="w-1/3 text-white text-base flex justify-center">
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter ms-2"></i>
          <i className="fab fa-facebook ms-2"></i>
        </div>
        <div className="w-1/3 text-white text-xs flex justify-end">
          <a href="#" className="me-3">Contact us</a>
          <a href="#" className="me-3">Privacy Policies</a>
          <a href="#" className="me-10">Help</a>
        </div>
      </div>


      {/* Mobile Layout */}
      <header className="md:invisible fixed top-0 px-5 py-3 bg-black w-full flex flex-col justify-center">
        <div className="flex w-full justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-white">M</span>
            <span className="text-xs font-bold text-white">Chuwa</span>
          </div>
          <div>
            <div className="text-white">
              <button className="text-sm"><i className="far fa-user me-2"></i></button>
              <button className="ms-7 text-sm"><i className="fas fa-cart-shopping me-2"></i>$0.00</button>
            </div>
          </div>
        </div>
        <div className="w-full mt-3 bg-white rounded flex items-center">
          <input type="text" className="p-2 rounded w-full outline-none" placeholder="Search" />
          <i className="fas fa-search text-gray-400 mx-3"></i>
        </div>
      </header>

      <div className="md:invisible fixed bottom-0 left-0 right-0 py-3 bg-black justify-between flex flex-col w-full">
        <div className="w-full text-white text-base flex justify-center">
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter ms-2"></i>
          <i className="fab fa-facebook ms-2"></i>
        </div>
        <div className="w-full text-white text-xs flex justify-center mt-1">
          <a href="#" className="me-3">Contact us</a>
          <a href="#" className="me-3">Privacy Policies</a>
          <a href="#">Help</a>
        </div>
        <div className="w-full flex justify-center mt-1">
          <span className="text-white text-xs">@2022 All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}

export default NavBars;
