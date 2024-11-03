import { FC, useState } from 'react'
import { useGlobalTask } from '../../context/contextTask';
import { TaskObj } from '../../Types/Type';
import "./AddTask.css"

const AddTask:FC = () => {

  const [status, ] = useState<boolean>(false)  
  const [description, setDescription] = useState<string>("");

  const {AddNewTask} = useGlobalTask()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTask: TaskObj = {
        status,
        description
    }
    if (newTask) {
      AddNewTask(newTask);
      setDescription("");
    }
  };

  return (
    <form  className='FormTask' onSubmit={handleSubmit}>
        <label>Add Task</label>
        <input className='form' type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="write your description here..."/>
        <button type="submit">Add</button>
    </form >
  )
}

export default AddTask