import axios, { AxiosResponse } from "axios";
import { TaskObj } from "./Types/Type";

export const GetTasks = async (): Promise<TaskObj[]> => {
    try {
        const response:AxiosResponse = await axios.get(`https://67274f17302d03037e708d9a.mockapi.io/api/eliy/Task`);
        return response.data;
    } catch (error) {
        throw new Error("Get failed")
    }
}

export const PostTask = async (Task:TaskObj): Promise<TaskObj> =>{
    try {
        const response:AxiosResponse = await axios.post(`https://67274f17302d03037e708d9a.mockapi.io/api/eliy/Task`, Task)
        return response.data;
    } catch (error) {
        throw new Error("Post failed")
    }
}

export const DeleteTask = async (id:string): Promise<void> =>{
    try {
        await axios.delete(`https://67274f17302d03037e708d9a.mockapi.io/api/eliy/Task/${id}`)
    } catch (error) {
        throw new Error("Delete failed")
    }
}

export const UpdateTask = async (id:string, Task:TaskObj): Promise<void> =>{
    try {
        await axios.put(`https://67274f17302d03037e708d9a.mockapi.io/api/eliy/Task/${id}`, Task)
    } catch (error) {
        throw new Error("Post failed")
    }
}