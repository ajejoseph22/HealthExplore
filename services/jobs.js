//Constants
import { sortOptions } from '../components/jobs/constants/sortOptions';

//Get all jobs
export const getAllJobs = () => {
    return new Promise((resolve) => {
        fetch(`/api/jobs`, {
            method: 'GET'
        })
            .then(res => {
                const STATUS_CODE = res.status;
                if (STATUS_CODE === 200) {
                    res.json().then(json => {
                        resolve({
                            status: STATUS_CODE,
                            jobs: json.jobs
                        })
                    })
                }
                else {
                    resolve({
                        status: STATUS_CODE
                    })
                }
            })
    })
}


//Search jobs with certain criteria
export const searchJobs = (term) => {
    return new Promise((resolve) => {
        fetch(`/api/jobs?term=${term}`, {
            method: 'GET'
        })
            .then(res => {
                const STATUS_CODE = res.status;
                if (STATUS_CODE === 200) {
                    res.json().then(json => {
                        console.log(json)
                        resolve({
                            status: STATUS_CODE,
                            jobs: json.jobs
                        })
                    })
                }
                else {
                    resolve({
                        status: STATUS_CODE
                    })
                }
            })
    })
}

//Search jobs and sort
export const getSortedJobs = (field, type, searchTerm) => {
    return new Promise((resolve) => {
        fetch(`/api/jobs?sortField=${sortOptions[field]}&sortType=${type}&term=${searchTerm}`, {
            method: 'GET'
        })
            .then(res => {
                const STATUS_CODE = res.status;
                if (STATUS_CODE === 200) {
                    res.json().then(json => {
                        console.log(json)
                        resolve({
                            status: STATUS_CODE,
                            jobs: json.jobs
                        })
                    })
                }
                else {
                    resolve({
                        status: STATUS_CODE
                    })
                }
            })
    })
}
