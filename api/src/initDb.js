/* eslint-disable */
import { connectDb } from './dbConnection';
import { jobItem } from './services';

const dotenv = require('dotenv');

dotenv.config();

const main = async () => {
  const connection = await connectDb();

  const dbName = connection.connection.db.databaseName;
  console.log(`drop and create database: ${dbName}`);

  await connection.connection.dropDatabase();

  const jobs = require('../data/jobs.json');

  for (const jobObj of jobs) {
    const { items } = jobObj;

    for (const item of items) {
      await jobItem.create({
        required_skills: item.required_skills,
        county: item.county,
        zip: item.zip,
        location: item.location,
        nurse_patient_ratio: item.nurse_patient_ratio,
        job_id: item.job_id,
        type: item.type,
        work_schedule: item.work_schedule,
        hospital_id: item.hospital_id,
        name: item.name,
        state: item.state,
        created: item.created,
        required_credentials: item.required_credentials,
        department: item.department,
        address: item.address,
        experience: item.experience,
        city: item.city,
        description: item.description,
        job_title: item.job_title,
        hours: item.hours,
        salary_range: item.salary_range,
        job_type: item.job_type
      });
    }
  }

  process.exit();
};

main();
