/* eslint-disable */
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import { jobItem } from '../src/services';

const jobItemData = {
  required_skills: [
    'Temperature Recording: Disposable Chemical Thermometer Oral',
    'Catheter Bag – Emptying (Urinary)',
    'Care of a Patient During a Seizure',
    'Bed Bath',
    'Administration of an Enema'
  ],
  county: 'Mono',
  zip: 93546,
  location: '37.64,-118.96',
  nurse_patient_ratio: '1:2',
  job_id: 3860,
  type: 'General Acute Care',
  work_schedule: 'Night shift',
  hospital_id: 757,
  name: 'Mammoth Hospital',
  state: 'CA',
  created: '2020-10-24T20:04:15.502846',
  required_credentials: [
    'DNP - Doctor of Nursing Practice',
    'CNM - Certified Nurse-Midwife'
  ],
  department: [
    'Medicine',
    'Anesthesiology & Perioperative Medicine',
    'Head and Neck Surgery',
    'Neurosurgery',
    'Pathology & Laboratory Medicine'
  ],
  address: '85 Sierra Park Road',
  experience: 'Internship',
  city: 'Mammoth Lakes, CA',
  description:
    'Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff',
  job_title: 'LPN Charge Nurse',
  hours: [10],
  salary_range: [22.22, 33.32],
  job_type: 'Part-time'
};

jest.setTimeout(30000);

describe('Job Model Test', () => {
  beforeAll(async () => {
    dotenv.config();

    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      (err) => {
        if (err) {
          process.exit(1);
        }
      }
    );
  });

  it('create job', async () => {
    const savedJob = await jobItem.create(jobItemData);

    expect(savedJob.name).toBe(jobItemData.name);
    expect(savedJob.address).toBe(jobItemData.address);
    expect(savedJob.job_type).toBe(jobItemData.job_type);
  });

  it('should return 1', async () => {
    const jobs = await jobItem.findJobs('Mammoth');

    expect(jobs.length).toBe(1);
  });

  it('should return 0', async () => {
    const jobs = await jobItem.findJobs('qweqweqweqew');

    expect(jobs.length).toBe(0);
  });

  it('count should return 1', async () => {
    const count = await jobItem.getCounts('Mammoth');

    expect(count).toBe(1);
  });

  it('count should return 0', async () => {
    const count = await jobItem.getCounts('qweqewqeqew');

    expect(count).toBe(0);
  });

  it('filter department check', async () => {
    const filters = await jobItem.getFilters();

    expect(filters.department.length).toBe(5);
  });

  it('filter experience check', async () => {
    const filters = await jobItem.getFilters();

    expect(filters.experience.length).toBe(1);
  });

  it('filter job_type check', async () => {
    const filters = await jobItem.getFilters();

    expect(filters.job_type.length).toBe(1);
  });

  it('filter work_schedule check', async () => {
    const filters = await jobItem.getFilters();

    expect(filters.work_schedule.length).toBe(1);
  });

  afterAll((done) => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    done();
  });
});
