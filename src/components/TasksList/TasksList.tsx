import { FC } from 'react'
import { useGlobalTask } from '../../context/contextTask'
import Task from '../Task/Task'
import "./TasksList.css"

const TasksList:FC = () => {

    const {tasks} = useGlobalTask()

  return (
    <div className='TasksList'>
       {tasks.map((ts)=>{ return <Task task={ts}/>})} 
    </div>
  )
}

export default TasksList