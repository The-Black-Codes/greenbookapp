export const getAllMembers = () => {
    return fetch(`http://localhost:8088/members`).then(
      (res) => res.json()
    );
  };