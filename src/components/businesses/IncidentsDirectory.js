import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllBusinesses,
  getAllCategories,
  getAllIncidents,
  getAllIncidentTypes,
} from "../managers/BusinessManager";
import { BusinessList } from "./BlackOwnedBusinessList";
import { IncidentsList } from "./IncidentsList";

export const IncidentsDirectory = () => {
  const [incidents, setIncidents] = useState([]);
  const [incidentTypes, setIncidentTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllIncidents().then((incidents) => {
      setIncidents(incidents);
    });
  }, []);
  useEffect(() => {
    getAllIncidentTypes().then((incidentTypes) => {
      setIncidentTypes(incidentTypes);
    });
  }, []);

  return (
    <main>
      <h1 className="text-5xl text-center m-8">Incidents</h1>
      <div className="flex justify-center">
        <div className="flex space-x-16 border justify-center w-2/3 rounded-lg shadow-lg h-20">
          <select className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green">
            <option value={0}>Select Category</option>
            {incidentTypes.map((incidentType) => {
              return (
                <option value={incidentType.id}>{incidentType.type}</option>
              );
            })}
          </select>
          <input
            className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green"
            placeholder="Search Incidents"
          ></input>
          <select className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2">
            <option value={0}>Select Filter</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
      <button className="bg-greenbook-green text-white p-1 rounded-lg" id="createBtn"
                onClick={() => {
                    navigate({ pathname: "/incidentform" })
            }}>Report an Incident</button></div>
      <div className="flex justify-center">
        <IncidentsList incidents={incidents} />
      </div>
    </main>
  );
}; 
