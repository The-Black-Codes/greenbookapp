import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import greenBookLogo from "../../images/greenbooklogo.svg";
import { getSingleBusiness } from "../managers/BusinessManager";
import { getSingleUser } from "../managers/UserManager";

export const NavBar = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const greenBookUser = localStorage.getItem("greenbook_user");
  const greenBookUserObject = JSON.parse(greenBookUser);

  useEffect(() => {
    if (greenBookUserObject === null) {
    } else {
      getSingleUser(greenBookUserObject.id).then((currentUser) => {
        setUser(currentUser);
      });
    }
  }, []);

  return (
    <nav className="flex justify-evenly bg-greenbook-green w-screen h-24">
      <div className="w-3/12 pl-5">
        <Link className="" to="/">
          <img className="h-24" src={greenBookLogo}></img>
        </Link>
      </div>
      <div className="w-6/12 flex justify-evenly ">
        <button
          onClick={() => {
            navigate("/about");
          }}
          className="text-white text-xl"
        >
          About
        </button>
        <button
          onClick={() => {
            navigate("/events");
          }}
          className="text-white text-xl"
        >
          Events
        </button>
        <button
          onClick={() => {
            navigate("/map");
          }}
          className="text-white text-xl"
        >
          Map
        </button>
        <button
          onClick={() => {
            navigate("/incidents");
          }}
          className="text-white text-xl"
        >
          Incidents
        </button>
        <button
          onClick={() => {
            navigate("/businesses");
          }}
          className="text-white text-xl"
        >
          Directory
        </button>
        <button
              onClick={() => {
                navigate("/team");
              }}
              className="text-white text-xl"
            >
              Team
            </button>
      </div>
      <div className="w-3/12 flex justify-end">
        {greenBookUserObject === null ? (
          <>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="text-white pr-5 text-xl"
            >
              Register
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-white pr-5 text-xl"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <div className="mt-9 text-white pr-5 text-md">
              Welcome Back, {user.firstName}
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("greenbook_user");
                navigate("/", { replace: true });
              }}
              className="text-white pr-5 text-xl"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
