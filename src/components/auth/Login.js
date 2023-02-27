import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// This component is responsible for the rendering and functionality of the login screen.
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          if (password === user.password) {
            localStorage.setItem(
              "greenbook_user",
              JSON.stringify({
                id: user.id,
                staff: user.isAdmin,
              })
            );

            navigate("/");
          } else {
            window.alert("Invalid login. Your password is incorrect.")
          }
        } else {
          // If it's not a valid login/valid email, a window alert will appear that says "invalid login"
          window.alert("Invalid login");
        }
      });
  };

  return (
    <>
      <main className="w-screen h-full flex justify-center items-center">
        <div className="flex justify-center border mt-52 w-1/2 h-40 rounded-xl shadow-xl p-5">
          <form className="" onSubmit={handleLogin}>
            <h1 className="text-3xl text-center mb-10">Login</h1>
            <div className="flex flex-col space-y-1">
              <input
                type="email"
                label="Email Address"
                description="Please enter a valid email"
                value={email}
                onChange={(evt) => {
                  let copy = { ...email };
                  copy = evt.target.value;
                  setEmail(copy);
                }}
                className="border p-1 rounded-lg"
                placeholder="Email address"
                required
                autoFocus
              ></input>
              <input
                type="password"
                label="Password"
                description="Please enter a valid password"
                value={password}
                onChange={(evt) => {
                  let copy = { ...password };
                  copy = evt.target.value;
                  setPassword(copy);
                }}
                className="border p-1 rounded-lg"
                placeholder="Password"
                required
                autoFocus
              ></input>
              <button
                className=" bg-greenbook-green p-1 rounded-xl text-white"
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Sign in
              </button>
            </div>
            <button
              className="bg-greenbook-green p-1 rounded-xl text-white mt-2"
              onClick={() => {
                navigate("/register");
              }}
            >
              Not a member yet? Create a new account!
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
