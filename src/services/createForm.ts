import axios from 'axios';
import { createJob } from '../endpoints';
import { IJobListingProps } from '../types';

export const saveJobDetailsForm = (payload: IJobListingProps) => {
    axios.post(createJob,payload);
}

export const getAvailaibleJobList = async () => {
    const response = await axios.get(createJob);
    return response;
}