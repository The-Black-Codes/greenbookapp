import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const IncidentsDirectory = ({ incidents }) => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="flex justify-center">
        <button
          className="bg-greenbook-green text-white p-1 rounded-lg mt-3"
          id="createBtn"
          onClick={() => {
            navigate({ pathname: "/incidentform" });
          }}
        >
          Report an Incident
        </button>
      </div>
      <div className="flex justify-center">
        <main className="w-3/4 mt-10 fixed overflow-y-scroll bg-green-100 h-[580px] p-3 rounded-xl">
          <div className="space-y-3">
            {incidents.map((incident) => {
              return (
                <div className="bg-white border rounded-lg relative p-3 h-36">
                  <h2 className="text-xl">{incident.title}</h2>
                  <div>
                    Reported by: {incident?.user?.firstName}{" "}
                    {incident?.user?.lastName}
                  </div>
                  <div className="absolute top-2 right-3">
                    {incident.incidentType.type}
                  </div>
                  <div className="date">{incident.date}</div>
                  <div>{incident.business.name}</div>
                  <div>"{incident.content}"</div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </main>
  );
};
