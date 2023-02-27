import { Link, useNavigate } from "react-router-dom";
import greenBookLogo from "../../images/greenbooklogo_h.svg";

export const NavBar = () => {
    const navigate = useNavigate()
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
            navigate("/blogs");
          }}
          className="text-white text-xl"
        >
          Blogs
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
      </div>
      <div className="w-3/12 flex justify-end">
        <button className="text-white pr-5 text-xl">Login</button>
      </div>
    </nav>
  );
};
