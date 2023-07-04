import React from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

  const changeState = (id) => {
    console.log('TODO: Cmabiar estado de una tarea')
  }

  return (
    <div>
      <div>
        <h1>Your tasks:</h1>
      </div>

      {/* TODO: Aplicar un For/Map para renderizar lista de tareas */}
      <TaskComponent task = { defaultTask } />
    </div>
  )
}

export default TaskListComponent
