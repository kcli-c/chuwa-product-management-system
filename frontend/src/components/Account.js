import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authUser, signUpUser } from '../app/userSlice';

const Account = ({ action }) => {
  let actionEnum;
  switch (action) {
    case "Sign in":
      actionEnum = 0;
      break;
    case "Sign up":
      actionEnum = 1;
      break;
    case "Update password":
      actionEnum = 2;
      break;
    case "Email sent":
      actionEnum = 3;
      break;
  }

  const titles = [
    "Sign in to your account",
    "Sign up an account",
    "Update your password"
  ];
  const buttonTitles = [
    "Sign in",
    "Create account",
    "Update password"
  ];
  const suggestions = [
    "Don't have an account?",
    "Already have an account?"
  ];
  const suggestionButton = [
    "Sign Up",
    "Sign In"
  ];
  const suggestionRoute = [
    "/signup",
    "/signin"
  ]

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    console.log("Submit button hit")
    event.preventDefault();
    let email = event.target.email.value;
    if (actionEnum === 2) {
      navigate("/email-sent");
      return;
    }
    let password = event.target.password.value;
    const signInData = {
      "email": email,
      "password": password,
    }
    const signUpData = {
      "email": email,
      "password": password,
      "admin": false,
    }
    if (actionEnum === 0) {
      const res = await dispatch(authUser(signInData));
      if (res.type.includes("fulfilled")) {
        navigate("/");
      } else {
        setMessage(res.payload);
      }
    } else {
      const res = await dispatch(signUpUser(signUpData));
      if (res.type.includes("fulfilled")) {
        navigate("/signin");
      } else {
        setMessage(res.payload);
      }
    }
  }

  return (
    <div className="h-full w-full flex justify-around items-center">
      <div className="bg-white w-1/2 p-10 rounded shadow-xl max-md:w-5/6">
        <div className="flex justify-end"><Link className="fas fa-xmark text-xl" to={"/"}></Link></div>
        {actionEnum < 3 &&
          <div>
            <div className="text-3xl text-center font-bold">
              <span>{titles[actionEnum]}</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <label>Email</label>
                <input type="text" name="email" className="p-2 border border-gray-300 rounded w-full" required />
              </div>
              {actionEnum < 2 && <div className="mt-5">
                <label>Password</label>
                <input type={actionEnum === 0 ? "password" : "text"} name="password" className="p-2 border border-gray-300 rounded w-full" required />
              </div>}
              <div className="flex justify-center mt-5">
                <button type="submit" className="bg-indigo-700 text-white w-full py-2 rounded">{buttonTitles[actionEnum]}</button>
              </div>
            </form>
            <p className='text-center text-red-700 font-medium mt-1'>{message}</p>
          </div>}
        {actionEnum < 2 &&
          <div className="flex justify-between mt-5 max-md:flex-col">
            <span className="text-center">{`${suggestions[actionEnum]} `}
              <Link className="underline font-bold text-indigo-700" to={suggestionRoute[actionEnum]} onClick={() => {setMessage("")}}>{suggestionButton[actionEnum]}</Link>
            </span>
            {actionEnum === 0 && <Link className="underline font-bold text-indigo-700 text-center" to={"/update-password"}>Forgot password?</Link>}
          </div>}
        {actionEnum === 3 &&
          <div className="flex flex-col items-center">
            <i className="fas fa-envelope-circle-check text-8xl text-indigo-700"></i>
            <p className="mt-5">We have sent the update password link to your</p>
            <p>email, please check that!</p>
          </div>
        }
      </div>
    </div>
  );
}

export default Account;
