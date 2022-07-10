const STUB_API = 'http://localhost:3000';

const getJobList = async () => {
  try {
    const response = await fetch(`${STUB_API}/jobs`);
    return await response.json();
  } catch (error) {
    return new Error(`There was a problem fetching the job list. ${error}`);
  }
};

const getJob = async (id) => {
  try {
    const response = await fetch(`${STUB_API}/jobs/${id}`);
    return await response.json();
  } catch (error) {
    return new Error(`There was a problem fetching the job with id: ${id}. ${error}`);
  }
};

const createJob = async (jobDetails) => {
  try {
    const response = await fetch(`${STUB_API}/jobs/`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobDetails)
    });
    return await response.json();
  } catch (error) {
    return new Error(`There was a problem creating the job. ${error}`);
  }
}

const updateJob = async (jobDetails) => {
  try {
    const response = await fetch(`${STUB_API}/jobs/${jobDetails.id}`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobDetails)
    });
    return await response.json();
  } catch (error) {
    return new Error(`There was a problem updating the job. ${error}`);
  }
}

const destroyJob = async (id) => {
  try {
    const response = await fetch(`${STUB_API}/jobs/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await response.json();
  } catch (error) {
    return new Error(`There was a problem deleting the job. ${error}`);
  }
}

export { getJobList, getJob, createJob, updateJob, destroyJob };