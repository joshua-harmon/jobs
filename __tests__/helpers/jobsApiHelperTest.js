import { getJobList, getJob, createJob, updateJob, destroyJob } from 'helpers/jobsApiHelper';
import mockJobs from 'db.json';

const OLD_FETCH = global.fetch;
const MOCK_JOBS = mockJobs.jobs;
const trimId = (job) => {
  delete job.id;
  return job;
}

beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_JOBS)
  }))
});

afterAll(() => {
  global.fetch = OLD_FETCH;
})

afterEach(() => {
  fetch.mockClear();
})

describe('getJobList', () => {
  it('retrieves a list of jobs', () => {
    return getJobList().then((jobList) => {
      expect(jobList).toBe(MOCK_JOBS);
    });
  })

  it('handles an error state', () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Connection failed')));
    return getJobList().then(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    })
  })
})

describe('getJob', () => {
  it('retrieves a single job', () => {
    global.fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(MOCK_JOBS[1])
    }));
    return getJob(1).then((job) => {
      expect(job).toBe(MOCK_JOBS[1])
    })
  })

  it('handles an error state', () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Connection failed')));
    return getJob(1).then(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    })
  })
})

describe('createJob', () => {
  it('receives success with payload', () => {
    global.fetch.mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(trimId(MOCK_JOBS[5]))
    }));
    return createJob(MOCK_JOBS[5]).then((job) => {
      expect(job).toBe(MOCK_JOBS[5]);
    })
  })

  it('handles an error state', () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Connection failed')));
    return createJob(MOCK_JOBS[5]).then(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    })
  })
})

describe('updateJob', () => {
  it('receives success with payload', () => {
    global.fetch.mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(trimId(MOCK_JOBS[5]))
    }));
    return updateJob(MOCK_JOBS[5]).then((job) => {
      expect(job).toBe(MOCK_JOBS[5]);
    })
  })

  it('handles an error state', () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Connection failed')));
    return updateJob(MOCK_JOBS[5]).then(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    })
  })
})

describe('destroyJob', () => {
  it('receives success with payload', () => {
    global.fetch.mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({body: 'Successfully deleted job'})
    }));
    return destroyJob(3).then((job) => {
      expect(job.body).toBe('Successfully deleted job');
    })
  })

  it('handles an error state', () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Connection failed')));
    return destroyJob(3).then(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    })
  })
})