// Business Manager Component holds all Business related requests.

export const createBusiness = (business) => {
  return fetch("http://localhost:8088/business", {
    method: "POST",
    body: JSON.stringify(business),
  }).then((res) => res.json());
};


export const getAllBusinesses = () => {
  return fetch(`http://localhost:8088/businesses?_expand=category`).then(
    (res) => res.json()
  );
};

export const getSingleBusiness = (id) => {
  return fetch(`http://localhost:8088/businesses/${id}?_expand=category`).then(
    (res) => res.json()
  );
};

export const getAllCategories = () => {
  return fetch(`http://localhost:8088/categories`).then((res) => res.json());
};

export const getAllIncidents = () => {
  return fetch(
    `http://localhost:8088/incidents?_expand=business&_expand=incidentType`
  ).then((res) => res.json());
};

export const createIncident = (newIncident) => {
  return fetch(`http://localhost:8088/incidents`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newIncident)
  }).then(response => response.json())
}

export const createLike = (newLike) => {
  return fetch(`http://localhost:8088/likes`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newLike)
  }).then(response => response.json())
}

export const getAllLikesForBusiness = (businessId) => {
  return fetch(`http://localhost:8088/likes?businessId=${businessId}`).then((res) => res.json());
};
export const getAllIncidentTypes = () => {
  return fetch(`http://localhost:8088/incidentTypes`).then((res) => res.json());
};

export const deleteBusiness = (id) => {
  return fetch(`http://localhost:8088/businesses/${id}`, {
    method: "DELETE",
  });
};

export const deleteLike = (id) => {
  return fetch(`http://localhost:8088/likes/${id}`, {
    method: "DELETE",
  });
};
