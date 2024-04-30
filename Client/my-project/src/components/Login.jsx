import "./handler.css";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("The email email:", email, "password: ", password);
    //Signup Authetication code/Logic for backend extension
  };

  return (
    <>
      <body className="w-12/12 h-[97vh] flex justify-center items-center">
        <div className="form-area border-darkwhite border-2 w-[98vw] md:w-[80vmin] ">
          <div className="flex flex-col justify-center items-center imgHolder h-20 w-12/12 bg-mustardyellow">
            <p className="text-3xl font-bold">Login</p>
            <span className="text-md">(Login into your Fashion account)</span>
          </div>

          <form className="p-3">
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              value={email}
              className="shadow-xl p-2 w-72"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="password"
              placeholder="Enter Password..."
              value={email}
              className="shadow-xl p-2 w-72"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <a href="/login">Don't Have an account?</a>
            <br></br>

            <button
              type="submit"
              className="mt-3 p-2 bg-mustardyellow text-black hover:bg-blue-700 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </body>
    </>
  );
};
export default Login;
