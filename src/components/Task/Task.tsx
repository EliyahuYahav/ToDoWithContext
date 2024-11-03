import { FC, useEffect, useState } from 'react'
import { useGlobalTask } from '../../context/contextTask'
import { TaskObj } from '../../Types/Type'
import "./Task.css"

interface TaskProps{
    task:TaskObj
}

const Task:FC<TaskProps> = ({task}) => {

    const {DeleteTheTask, ChangeStatus} = useGlobalTask()
    const [status, setStatus] = useState<string>("")

    useEffect(() => {
        setStatus(task.status === false ? "✖️" : "✔️")
      }, [task.status])

  return (
    <form className='Task'>
        <h3 onClick={()=>ChangeStatus(task.id!)}>{status} {task.description} <button className='btn' onClick={()=>DeleteTheTask(task.id!)}> delete</button></h3>
        
    </form>
  )
}

export default Task
