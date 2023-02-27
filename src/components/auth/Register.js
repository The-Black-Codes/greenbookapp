import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// This component is responsible for the rendering and functionality of the register page.
export const Register = () => {
  const [passwordVerification, setPasswordVerification] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
  });
  let navigate = useNavigate();

  //   Function: handles creation of new greenbook user.
  const registerNewUser = () => {
    console.log(user.password);
    console.log(passwordVerification);
    if (user.password === passwordVerification) {
      return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((createdUser) => {
          if (createdUser.hasOwnProperty("id")) {
            localStorage.setItem(
              "greenbook_user",
              JSON.stringify({
                id: createdUser.id,
                admin: createdUser.isAdmin,
              })
            );

            navigate("/");
          }
        });
    } else {
      window.alert("Passwords do not match. Please try again");
    }
  };

  //   function: checks if user exists in system before registration can be performed.
  const handleRegister = (e) => {
    e.preventDefault();
    return fetch(`http://localhost:8088/users?email=${user.email}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.length > 0) {
          // Duplicate email. No good.
          window.alert("Account with that email address already exists");
        } else {
          // Good email, create user.
          registerNewUser();
        }
      });
  };

  // on change function to update user state variable.
  const updateUser = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.value;
    setUser(copy);
  };

  return (
    <main className="w-screen h-full flex justify-center items-center">
      <div className="flex justify-center border mt-52 w-1/2 h-40 rounded-xl shadow-xl p-5">
        <form className="" onSubmit={handleRegister}>
          <h1 className="text-3xl text-center mb-10">Register for Greenbook</h1>
          <div className="flex flex-col space-y-1">
              <input
                className="border p-1 rounded-lg"
                label="First Name"
                description="Please enter your first name "
                onChange={updateUser}
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                required
                autoFocus
              ></input>
              <input
                className="border p-1 rounded-lg"
                label="Last Name"
                description="Please enter your last name"
                onChange={updateUser}
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                required
                autoFocus
              ></input>

              <input
                className="border p-1 rounded-lg"
                label="Email Address"
                description="Please enter a valid email address"
                onChange={updateUser}
                type="email"
                id="email"
                placeholder="Email address"
                required
              ></input>
              <input
                className="border p-1 rounded-lg"
                label="Password"
                description="Please enter a valid email address"
                onChange={updateUser}
                type="password"
                id="password"
                placeholder="Please create a password"
                required
              ></input>
              <input
                className="border p-1 rounded-lg"
                label="Password"
                description="Please verify your password"
                onChange={(evt) => {
                  let copy = { ...passwordVerification };
                  copy = evt.target.value;
                  setPasswordVerification(copy);
                }}
                type="password"
                id="verifypassword"
                placeholder="Verify your password"
                required
              ></input>
              <div>
                <button
                  className="bg-greenbook-green p-1 text-white rounded-lg mt-3"
                  type="submit"
                >
                  {" "}
                  Create Account{" "}
                </button>
              </div>
          </div>
        </form>
      </div>
    </main>
  );
};
