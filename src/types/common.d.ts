declare namespace Test {
  export type FilterType = 'job_type' | 'work_schedule' | 'experience' | 'department'
  export type FilterItem = {
    key: string
    doc_count: number
  }

  export type JobItem = {
    job_title: string
    job_type: string
    salary_range: [number, number]
    city: string
    department: string[]
    work_schedule: string
    hours: number[]
    description: string
    [key: string]: any
  }

  export type Job = {
    total_jobs_in_hospital: number
    name: string
    job_title: string
    items: JobItem[]
  }
}