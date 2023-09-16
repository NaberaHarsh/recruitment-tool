import axios from 'axios';
import { createJob } from './endpoints';
import { IJobListingProps } from '../types';

export const getAvailaibleJobList = async () => {
    const response = await axios.get(createJob);
    return response;
}

export const saveJobDetailsForm = (payload: IJobListingProps) => {
    axios.post(createJob,payload);
}

export const updateJobDetailsForm = (payload : IJobListingProps) => {
    axios.put(`${createJob}/${payload.id}`,payload);
}

export const deleteJob = (jobID:string) => {
    axios.delete(`${createJob}/${jobID}`);

}

