import { Route, Routes, Outlet } from "react-router-dom";
import { BlackOwnedBusinessDirectory, } from "../businesses/BlackOwnedBusinessDirectory";
import { BusinessDirectoryContainer } from "../businesses/BusinessDirectoryContainer";
import { BusinessProfile } from "../businesses/BusinessProfile";
import { IncidentsDirectory } from "../businesses/IncidentsDirectory";
import { IncidentForm } from "../businesses/IncidentForm"; 
import { About } from "./About";
import { HomePageView } from "./HomePageView";
import { Register } from "../auth/Register";
import { Login } from "../auth/Login";
import { Events } from "../calendar/Events";

// This component is responsible for rendering all the possible views for visitors to the site. It contains routes to other components in the application.
export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomePageView />

            <Outlet />
          </>
        }
      ></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/businesses"
        element={<BusinessDirectoryContainer />}
      ></Route>
      <Route path="/businesses/:businessId" element={<BusinessProfile />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/incidents" element={<IncidentsDirectory />}></Route>
      <Route path="/incidentform" element={<IncidentForm />}></Route>
    </Routes>
  );
};
