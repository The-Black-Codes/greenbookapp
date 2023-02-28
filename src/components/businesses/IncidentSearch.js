import {
  getAllCategories,
  getAllBusinesses,
  getAllBusinessesByCategory,
  getAllIncidentTypes,
  getAllIncidents,
} from "../managers/BusinessManager";
import { useState, useEffect } from "react";

// This component is responsible for taking the changeEvent.target.value of what is typed into the searchbar and the setterFunction will store it in the state variable.
export const IncidentSearch = ({
  setterFunction,
  setIncidents,
  incidents,
  searchTermState,
}) => {
  const [incidentTypes, setIncidentType] = useState([]);
  const [selectedIncidentTypeId, setSelectedIncidentTypeId] = useState("");

  useEffect(() => {
    getAllIncidentTypes().then((incidentTypes) => {
      setIncidentType(incidentTypes);
    });
  }, []);

  const resetSearch = () => {
    getAllIncidents().then((currentIncidents) => {
      setIncidents(currentIncidents);
      setSelectedIncidentTypeId("0");
    });
  };

  const getIncidentByIncidentType = (id) => {
    return fetch(
      `http://localhost:8088/incidents?_expand=incidentType&_expand=business&incidentTypeId=${id}`
    )
      .then((res) => res.json())
      .then((currentIncidents) => {
        setIncidents(currentIncidents);
      });
  };

  useEffect(() => {
    if (selectedIncidentTypeId > "0") {
      getIncidentByIncidentType(selectedIncidentTypeId);
    }
  }, [selectedIncidentTypeId]);

  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );

  // Allows User to submit search on network home, by clicking enter.
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      const searchedIncidents = incidents.filter((incident) => {
        return incident.title
          .toLowerCase()
          .includes(searchTermState.toLowerCase());
      });
      setIncidents(searchedIncidents);
    }
  };

  const searchIncidents = () => {
    const searchedIncidents = incidents.filter((incident) => {
      return incident.title
        .toLowerCase()
        .includes(searchTermState.toLowerCase());
    });
    setIncidents(searchedIncidents);
  };
  return (
    <main className="flex justify-center">
      <div className="flex space-x-16 border justify-center w-fit pl-5 pr-5 h-24 rounded-lg shadow-lg">
        <button
          className="bg-greenbook-green text-white h-fit p-2 mt-5 bt-5 rounded-lg"
          onClick={() => {
            resetSearch();
          }}
        >
          Reset
        </button>
        <div className="flex space-x-2">
          <input
            className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green"
            placeholder="Search Businesses"
            onKeyDown={handleKeyPress}
            onChange={(changeEvent) => {
              setterFunction(changeEvent.target.value);
            }}
            type="text"
          ></input>
          <button
            className="bg-greenbook-green text-white h-fit p-2 mt-5 bt-5 rounded-lg"
            onClick={() => {
              searchIncidents();
            }}
          >
            {searchIcon}
          </button>
        </div>
        <select
          className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green"
          value={selectedIncidentTypeId}
          onChange={(evt) => {
            const copy = evt.target.value;
            setSelectedIncidentTypeId(copy);
          }}
        >
          <option value={0}>Select Incident Type</option>
          {incidentTypes.map((incidentType) => {
            return <option value={incidentType.id}>{incidentType.type}</option>;
          })}
        </select>
      </div>
    </main>
  );
};
