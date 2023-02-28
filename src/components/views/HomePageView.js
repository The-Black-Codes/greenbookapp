// import BHM from "../../images/BHM.jpeg";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Restaurants",

    imageUrl:
      "https://images.unsplash.com/photo-1662041648634-684d7d09ebbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Fitness",

    imageUrl:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Health & Wellness",

    imageUrl:
      "https://images.unsplash.com/photo-1569383971623-393054ce65c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=305&q=80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

export const HomePageView = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen">
        <img className="w-screen h-80" src={BHM} alt="happy"></img>
      </div>

      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-emerald-700 sm:text-4xl">
              The Greenest Book!
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              For Us By Us.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {categories.map((category) => (
              <li key={category.name}>
                <img
                  className="mx-auto h-56 w-56 rounded-full"
                  src={category.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-emerald-700">
                  {category.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {category.role}
                </p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li></li>
                  <li></li>
                </ul>
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => {
                navigate("/login");
              }}
              class="bg-emerald-700 hover:bg-blue-700 text-white font-bold py-8 px-8 rounded-full mx-auto max-w-2xl"
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
