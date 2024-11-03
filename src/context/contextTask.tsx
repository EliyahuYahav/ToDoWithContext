import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { TaskObj } from "../Types/Type";
import { DeleteTask, GetTasks, PostTask, UpdateTask } from "../data";

interface TaskProviderProps {
  children: ReactNode;
}

interface ContextProps {
    tasks:TaskObj[]
    AddNewTask: (newTask:TaskObj)=>void
    DeleteTheTask: (id :string)=>void
    ChangeStatus: (id:string)=>void
}

const TaskContext = createContext<ContextProps>({
    tasks:[],
    AddNewTask: () => {},
    DeleteTheTask: () => {},
    ChangeStatus: () => {},
});

const GetAllTasks = async (): Promise<TaskObj[]> => {
    return await GetTasks()
 };

const TaskProvider: FC<TaskProviderProps> = ({ children }) => {

    const [tasks, setTasks] = useState<TaskObj[]>([])
    const [flag, setFlag] = useState<boolean>(true)


    const AddNewTask = async(newTask:TaskObj): Promise<void> => {
       await PostTask(newTask);
        setFlag(!flag)
    };

    const DeleteTheTask = async (id :string): Promise<void> => {
       await DeleteTask(id)
       setFlag(!flag)
    };

    const ChangeStatus = async(id:string): Promise<void> => {
      const res:TaskObj | undefined = tasks.find((task)=>{ return task.id == id})
      if (res) {
        res.status = true
        await UpdateTask(id, res)
        setFlag(!flag)
      }
    };

    useEffect(()=>{
        const fetchData =async()=>{
           const data =  await GetAllTasks()
           setTasks(data)
        }
        fetchData();
    },[flag])

  return <TaskContext.Provider value={{ tasks, AddNewTask, DeleteTheTask, ChangeStatus}}>
    {children}
    </TaskContext.Provider>;
};

export const useGlobalTask = () => {
  return useContext(TaskContext);
};

export { TaskContext, TaskProvider };
