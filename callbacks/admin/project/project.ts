import axios, { AxiosResponse } from "axios";

import { ADMIN_PROJECT_URL,ErrorType,SERVER_ERROR,setConfig } from "@/callbacks/constants";
import { errorNotification } from "@/callbacks/notification";

export interface Project {
    project_name: string,
    professor_name: string
    university_name:string
    university_location:string
    project_field_of_study: string
    project_mode: string
    project_duration: string
    project_details: string
    stipend: string
    eligibility: string
    application_deadline : string
}

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const adminProjectInstance = axios.create({
    baseURL: ADMIN_PROJECT_URL,
    timeout: 15000,
    timeoutErrorMessage: SERVER_ERROR,
  });

const requestProject = {
    post: (token:string, body: Project)=>
        adminProjectInstance
        .post(`/api/admin/project`, body, setConfig(token))
        .then(responseBody)
        .catch((err: ErrorType) => {
            errorNotification("Registration Failed", err.response?.data?.error);
            return {};
          }),

}
export default requestProject

