import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { useEffect } from 'react'
import { Flex, Switch } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'


const TaskComponent = ({ task, complete, remove}) => { 

  useEffect(() => {
    console.log("Tarea creada")
    return () => {
      console.log(`task: ${task.name}`)
    };
  }, [task]);

function taskCompletedIcon() {
  if (task.completed){
    return (<Switch defaultChecked={task} onChange={() => complete(task)} />)
  } else {
    return (<Switch onChange={() => complete(task)} />)
  }

}




  return (
      <tr>
        <th><span>{task.name}</span></th>
        <td><span>{task.description}</span></td>
        <td><span>{task.level}</span></td>
        <td>
        <Box  ml={5}   gap="15px"  display="flex"> 
        <span> {taskCompletedIcon()}</span>
        <span><button onClick={() => remove(task)}>X</button></span>
        </Box>
        
        </td>
      </tr>

    





  )
}

TaskComponent.propTypes = {

  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired, 
  remove: PropTypes.func.isRequired
  
  

}

export default TaskComponent
