import { useState, useEffect } from "react";
import {  getAllIncidents } from "../managers/BusinessManager";
import { IncidentSearch } from "./IncidentSearch";
import { IncidentsDirectory } from "./IncidentsDirectory";

export const IncidentDirectoryContainer = () => {
  const [searchTerms, setIncidentSearchTerms] = useState("");
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    getAllIncidents().then((incidents) => {
      setIncidents(incidents);
    });
  }, []);

  // The Incident Directory Container parent component will return two children components.
  return (
    <>
      <h1 className="text-5xl text-center m-5">Incident Directory</h1>
      <IncidentSearch
        setterFunction={setIncidentSearchTerms}
        incidents={incidents}
        searchTermState={searchTerms}
        setIncidents={setIncidents}
      />
      <IncidentsDirectory searchTermState={searchTerms} incidents={incidents} />
    </>
  );
};
