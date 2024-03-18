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

  return (
    <div className="h-screen w-screen flex justify-around items-center bg-gray-100">
      <div className="bg-white w-1/2 p-10 rounded shadow-xl max-md:w-5/6">
        <div className="flex justify-end"><button className="fas fa-xmark text-xl"></button></div>
        {actionEnum < 3 &&
          <div>
            <div className="text-3xl text-center font-bold">
              <span>{titles[actionEnum]}</span>
            </div>
            <div>
              <div className="mt-5">
                <span>Email</span>
                <input type="text" className="p-2 border border-gray-300 rounded w-full" />
              </div>
              {actionEnum < 2 && <div className="mt-5">
                <span>Password</span>
                <input type="text" className="p-2 border border-gray-300 rounded w-full" />
              </div>}
              <div className="flex justify-center mt-5">
                <button className="bg-indigo-700 text-white w-full py-2 rounded">{buttonTitles[actionEnum]}</button>
              </div>
            </div>
          </div>}
        {actionEnum < 2 &&
          <div className="flex justify-between mt-5 max-md:flex-col">
            <span className="text-center">{`${suggestions[actionEnum]} `}
              <button className="underline font-bold text-indigo-700">{suggestionButton[actionEnum]}</button>
            </span>
            {actionEnum === 0 && <button className="underline font-bold text-indigo-700">Forgot password?</button>}
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
