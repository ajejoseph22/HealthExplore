import mongoose from 'mongoose';
import { jobItem } from '../models';

class JobItem {
  static async findJobs(q, department, location, experience, role) {
    const $sort = {
      created: -1
    };

    if (department) {
      // eslint-disable-next-line
      $sort.department = parseInt(department);
    }

    if (location) {
      // eslint-disable-next-line
      $sort.location = parseInt(location);
    }

    if (experience) {
      // eslint-disable-next-line
      $sort.experience = parseInt(experience);
    }

    if (role) {
      // eslint-disable-next-line
      $sort.role = parseInt(role);
    }

    const regex = { $regex: new RegExp(q), $options: 'i' };

    return this.aggregate([
      {
        $match: {
          $or: [
            { location: regex },
            { type: regex },
            { name: regex },
            { state: regex },
            { address: regex },
            { experience: regex },
            { description: regex },
            { city: regex },
            { department: regex },
            { job_type: regex },
            { job_title: regex }
          ]
        }
      },
      { $sort },
      { $unwind: '$name' },
      {
        $group: {
          _id: '$name',
          total_jobs_in_hospital: { $sum: 1 },
          items: { $push: '$$ROOT' }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            total_jobs_in_hospital: '$total_jobs_in_hospital',
            items: '$items',
            name: '$_id',
            _id: '$_id'
          }
        }
      }
    ]);
  }

  static async getCounts(q) {
    const regex = { $regex: new RegExp(q), $options: 'i' };

    return this.countDocuments({
      $or: [
        { location: regex },
        { type: regex },
        { name: regex },
        { state: regex },
        { address: regex },
        { experience: regex },
        { description: regex },
        { city: regex },
        { department: regex },
        { job_type: regex },
        { job_title: regex }
      ]
    });
  }

  static async getFilters() {
    const department = await this.aggregate([
      { $unwind: '$department' },
      {
        $group: {
          _id: '$department',
          key: { $last: '$department' },
          doc_count: { $sum: 1 }
        }
      }
    ]);

    const jobType = await this.aggregate([
      { $unwind: '$job_type' },
      {
        $group: {
          _id: '$job_type',
          key: { $last: '$job_type' },
          doc_count: { $sum: 1 }
        }
      }
    ]);

    const workSchedule = await this.aggregate([
      { $unwind: '$work_schedule' },
      {
        $group: {
          _id: '$work_schedule',
          key: { $last: '$work_schedule' },
          doc_count: { $sum: 1 }
        }
      }
    ]);

    const experience = await this.aggregate([
      { $unwind: '$experience' },
      {
        $group: {
          _id: '$experience',
          key: { $last: '$experience' },
          doc_count: { $sum: 1 }
        }
      }
    ]);

    return {
      job_type: jobType,
      work_schedule: workSchedule,
      experience,
      department
    };
  }
}

jobItem.loadClass(JobItem);

const JobItems = mongoose.model('jobItems', jobItem);

export default JobItems;
