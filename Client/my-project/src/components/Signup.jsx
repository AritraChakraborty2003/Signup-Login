import "./handler.css";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(
      "Name: ",
      name,
      "The email email:",
      email,
      "password: ",
      password,
      "address: ",
      address,
      "confirm password: ",
      confirmPassword,
      "mobile: ",
      mobile
    );
    //Signup Authetication code/Logic for backend extension
  };

  return (
    <>
      <body className="w-12/12 h-[97vh] flex justify-center items-center">
        <div className="form-area border-darkwhite border-2 w-[98vw] md:w-[80vmin] ">
          <div className="flex flex-col justify-center items-center imgHolder h-20 w-12/12 bg-mustardyellow">
            <p className="text-3xl font-bold">Sign-Up</p>
            <span className="text-md">
              (Fill the details to create an account)
            </span>
          </div>

          <form className="p-3">
            <input
              type="text"
              name="name"
              placeholder="Enter Name..."
              className="shadow-xl p-2 w-72"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br />
            <br />
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
            <input
              type="text"
              name="cnfPassword"
              placeholder="Confirm  Password..."
              value={email}
              className="shadow-xl p-2 w-72"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>

            <br></br>
            <br></br>
            <input
              type="text"
              name="Address"
              placeholder="Enter Address..."
              value={email}
              className="shadow-xl p-2 w-72"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br></br>
            <br></br>

            <a href="/login">Already have an account?</a>
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
export default Signup;
