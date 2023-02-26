
export const IncidentsList = ({ incidents }) => {
  const heroCheckmark = (
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
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  );

  return (
    <main className="w-3/4 h-full mt-10 fixed overflow-y-scroll">
      <div className="space-y-3">
        {incidents.map((incident) => {
          return (
            <div className="border rounded-lg relative p-3 h-36">
              <h2 className="text-xl">{incident.title}</h2>
              <div>Reported by: {incident?.user?.firstName} {incident?.user?.lastName}</div>
              <div className="absolute top-2 right-3">{incident.incidentType.type}</div>
              <div>{incident.business.name}</div>
              <div>"{incident.content}"</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
