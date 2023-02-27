import { Route, Routes, Outlet } from "react-router-dom";
import { BlackOwnedBusinessDirectory, } from "../businesses/BlackOwnedBusinessDirectory";
import { BusinessDirectoryContainer } from "../businesses/BusinessDirectoryContainer";
import { BusinessProfile } from "../businesses/BusinessProfile";
import { IncidentsDirectory } from "../businesses/IncidentsDirectory";
import { IncidentForm } from "../businesses/IncidentForm"; 
import { About } from "./About";
import { HomePageView } from "./HomePageView";

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
      <Route path="/businesses" element={<BusinessDirectoryContainer />}></Route>
      <Route path="/businesses/:id" element={<BusinessProfile />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/incidents" element={<IncidentsDirectory />}></Route>
      <Route path="/incidentform" element={<IncidentForm />}></Route>
    </Routes>
  );
};
