import { ReactPropTypes, useRef } from "react";
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'
import propTypes from 'prop-types'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react"



export const TaskForm = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);


    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }

    TaskForm.propTypes = {
        add: propTypes.func.isRequired,
        length: propTypes.number.isRequired
    }

    return (
        <Box mt={12} >
        <form   onSubmit={addTask}>
            <HStack>

                <input  ref={nameRef} id='inputName' type='text' required placeholder="Nombre tarea" ></input>
                <input  ref={descriptionRef} id='inputDescription' type='text' required  placeholder="Descripción tarea"></input>
                <label  htmlFor="selectLevel">Priority</label>


                <select     ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' placeholder="Prioridad">

                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOQUING}>
                        Blocking
                    </option>
                </select>
            <Button type="submit" colorScheme='blue'>
            {length > 0 ? 'Add new task' : 'Create your first task'}
            </Button>
            </HStack>
        </form>

        </Box>

    );


}

