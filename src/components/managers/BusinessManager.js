// Interview Manager Component holds all Interview related requests.

export const createBusiness = (interview) => {
  return fetch("http://localhost:8088/interviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("seeker_token")}`,
    },
    body: JSON.stringify(interview),
  }).then((res) => res.json());
};

export const getAllBusinesses = () => {
  return fetch(`http://localhost:8088/businesses?_expand=category`).then((res) => res.json());
};

export const getSingleBusiness = ({id}) => {
  return fetch(`http://localhost:8088/businesses/${id}?_expand=category`).then((res) => res.json());
};

export const getAllCategories = () => {
  return fetch(`http://localhost:8088/categories`).then((res) => res.json());
};

export const getAllIncidents = () => {
  return fetch(
    `http://localhost:8088/incidents?_expand=business&_expand=incidentType&_expand=user`
  ).then((res) => res.json());
};

export const getAllIncidentTypes = () => {
  return fetch(`http://localhost:8088/incidentTypes`).then((res) =>
    res.json()
  );
};


export const deleteBusiness = (id) => {
  return fetch(`http://localhost:8088/interviews/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("seeker_token")}`,
    },
  });
};

export const updateBusiness = (interview, id) => {
  return fetch(`http://localhost:8088/interviews/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("seeker_token")}`,
    },
    body: JSON.stringify(interview),
  });
};
