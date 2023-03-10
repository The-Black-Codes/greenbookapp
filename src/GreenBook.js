import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./components/navbar/nav";
import { ApplicationViews } from "./components/views/ApplicationViews";


export const GreenBook = () => {
  return <Routes>

		<Route path="*" element={
				<>
					<NavBar />
					<ApplicationViews />

				</>
		} />
	</Routes>
}
// import React from "react";
// import "./App.css";
// import { SignIn } from "./components/auth/auth";
// function App() {
//   return (
//     <div className="App">
//       The GreenBook App
//       <SignIn />
//     </div>
//   );
// }
// export default App;

//➜ This is for tailwind __ npm install @headlessui/react @heroicons/rea
