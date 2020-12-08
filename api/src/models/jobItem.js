import { Schema } from 'mongoose';

const jobItemSchema = new Schema({
  required_skills: [{ type: String }],
  county: { type: String },
  zip: { type: Number },
  location: { type: String },
  nurse_patient_ratio: { type: String },
  job_id: { type: Number },
  type: { type: String },
  work_schedule: { type: String },
  hospital_id: { type: Number },
  name: { type: String },
  state: { type: String },
  created: { type: Date },
  required_credentials: [{ type: String }],
  department: [{ type: String }],
  address: { type: String },
  experience: { type: String },
  city: { type: String },
  description: { type: String },
  job_title: { type: String },
  hours: [{ type: Number }],
  salary_range: [{ type: Number }],
  job_type: { type: String }
});

jobItemSchema.index({
  location: 'text',
  type: 'text',
  name: 'text',
  state: 'text',
  address: 'text',
  experience: 'text',
  description: 'text',
  city: 'text',
  job_type: 'text',
  department: 'text',
  job_title: 'text'
});

export default jobItemSchema;
