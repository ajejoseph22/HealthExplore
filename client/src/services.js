import axios from "axios";

const getJobs = (q, location, department, role, experience) => {
  let query = "/api/job/list";

  if (q) {
    query += `?q=${q}`;
  }

  if (location) {
    query += `?location=${location}`;
  }

  if (department) {
    query += `?department=${department}`;
  }

  if (role) {
    query += `?role=${role}`;
  }

  if (experience) {
    query += `?experience=${experience}`;
  }

  return new Promise((resolve, reject) => {
    axios
      .get(query)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => reject(err));
  });
};

const getFilters = (requestDetailId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/job/getFilters`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => reject(err));
  });
};

const getTotalCount = (q) => {
  let query = "/api/job/totalCount";

  if (q) {
    query += `?q=${q}`;
  }

  return new Promise((resolve, reject) => {
    axios
      .get(query)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => reject(err));
  });
};

const services = {
  getJobs,
  getFilters,
  getTotalCount,
};

export default services;
